<p align="center">
    <img style="width: 400px;" src="https://repository-images.githubusercontent.com/448071637/0d3befa7-1dfe-42b6-b360-637a9b00202a" alt="" />
</p>

# Meraki Script Starter Template

This template is designed to get you developing a Script for Meraki as quickly as possible.

Your project must contain at least two files - `Script.js` and `ScriptTraits.js`.  See the [SDK documentation](https://github.com/merakigenart/meraki-js-sdk/blob/main/README.md) for more a comprehensive description of the requirements when using the SDK.

To get started, run the setup command below and you can jump right into developing a P5.js, three.js, or plain javascript script for Meraki using our SDK.

## Setup

To get started, you need to install the project dependencies:

```bash
npm install
```

## Checking Your Script

To enhance your development experience, Meraki provides a web service that validates your scripts.

To run the script checks on your `Script.js` file:

```bash
npm run check:script
```

and for your `ScriptTraits.js` file:

```bash
npm run check:traits
```

You should see output similar to the following:

![image](https://user-images.githubusercontent.com/5508707/149796322-87a7788d-3553-4efe-84f1-78e12af30413.png)


## Previewing Your Work

To start a web server that will display the current rendering of your script, run:

```bash
npm run serve
```

Open the url generated by this command in your browser to view your rendered image.

You may initially see the dashboard - simply select the item that applies to your script:

![image](https://user-images.githubusercontent.com/5508707/152647649-c7aa21bd-1f6d-4238-b0ce-3488565d2df1.png)


## Bundle Your Work

To bundle your project's source code into a zip archive for submission to Meraki:

```bash
npm run bundle
```

![image](https://user-images.githubusercontent.com/5508707/149685539-105fd57e-ff4a-4511-9aa1-91e49d9458f4.png)

You may then submit the newly created `project.zip` file on the Meraki project dashboard:

![image](https://user-images.githubusercontent.com/5508707/149684950-a04fa8ac-2889-4907-9f88-70b3f3cfe31c.png)

Uploading the file does not submit it for review - it streamlines the process of getting your code into the platform, where they can be edited, rendered and submitted for review.

---

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Patrick Organ](https://github.com/patinthehat)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
