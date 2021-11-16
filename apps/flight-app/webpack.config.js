const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ['@flight-workspace/shared/auth-lib']);

module.exports = {
  output: {
    uniqueName: "flightApp",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "flightApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './apps/flight-app/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
        //     "dashboard": "dashboard@http://localhost:4200/remoteEntry.js",
        //     "external": "external@http://localhost:4200/remoteEntry.js",
        //     "flightAdmin": "flightAdmin@http://localhost:4200/remoteEntry.js",
        //     "luggage": "luggage@http://localhost:4200/remoteEntry.js",
        //     "passenger": "passenger@http://localhost:3000/remoteEntry.js",
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },

          ...sharedMappings.getDescriptors()
        }
    }),
    sharedMappings.getPlugin()
  ],
};
