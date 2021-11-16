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
    uniqueName: "passenger",
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
        name: "passenger",
        filename: "remoteEntry.js",
        exposes: {
          './module': './apps/passenger/src/app/passenger/passenger.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "dashboard": "dashboard@http://localhost:4200/remoteEntry.js",
        //     "external": "external@http://localhost:4200/remoteEntry.js",
        //     "flightAdmin": "flightAdmin@http://localhost:4200/remoteEntry.js",
        //     "flightApp": "flightApp@http://localhost:4200/remoteEntry.js",
        //     "luggage": "luggage@http://localhost:4200/remoteEntry.js",

        // },

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
