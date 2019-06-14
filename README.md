# grunt-kquery-upload

> Grunt plugin that will automatically upload KQuery packages, using [`kquery-upload`](https://git.labs.nuance.com/nicholas_grippo/kquery-upload)

*Issues with the output should be reported on the `kquery-upload` [issue tracker](https://git.labs.nuance.com/nicholas_grippo/grunt-kquery-upload/issues).*

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install git+https://git.labs.nuance.com/nicholas_grippo/grunt-kquery-upload.git --save-dev
```

or add the module manually to your package.json file:

```json
{
  "devDependencies": {
    "grunt-kquery-upload": "git+https://git.labs.nuance.com/nicholas_grippo/grunt-kquery-upload.git"
  }
}
```

and run 

```shell
npm install
```


Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kquery-upload');
```

## Updating .gitignore

It is very important that you update the .gitignore with the flowing lines:

```text
.cookies.json
.uploadCache
downloads/
```


## The "kquery_upload" task

### Overview
In your project's Gruntfile, add a section named `kquery_upload` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  kquery_upload: {
    upload: {
      options: {
        deletePreviousCachedUpload: true,   // Delete last uploaded file
        downloadBeforeDeletion: true,       // Download package before deleting last uploaded file
        uploadCache: ".uploadCache",        // Location of the Upload Cache so it knows what was last uploaded
        kqueryFile: outputZip,              // Name of the KQuery package from the grunt build
        downloadFolderPath: "./downloads",  // Location of the downloaded KQuery Files
        loginCookie: ".cookies.json",       // Location of Cached Credentials
        agentID: "4862052787538775930",     //Agent ID of the VA
        workStream: "Workstream_0",         // Workstream (Workstream_0 represents main)
        tryCachedCredentials: true,         // This will use Cached Credentials File
        IQSHost: "nuance-va"                // nuance-va or nina-nuance
      }
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_0.1.0_ initial release
