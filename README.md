# O Cinema React Email Builder
![image](https://user-images.githubusercontent.com/33945/69481102-1edd3080-0ddc-11ea-8c98-96eac3792c63.png)

## Synopsis
A drag and drop email builder for a local independant cinema which uses its WP JSON API to create prefilled templates. An HTML email template can be created to import into an Email Service Provider such as Constant Contact or MailChimp.

## Features
 - [x] Can create a basic email layout using drag and drop
 - [x] Can prefill basic event modules with content via WP API
 - [x] Uses Inky to create an email friendly HTML template for copy and pasting into ESPs

### Next
 - Drag and drop content modules directly in layout modules (as opposed to it all being in one block)
 - Ability to upload photos directly to Cloudinary
 - Clean up visual drag and drop interface
 - Add unit tests
 - Document what I needed to change on the WP REST API side

### Colophon
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). We also used Material-UI and Flow for typesetting variables.

To generate the email templates, we used Inky, based on Foundation for Email.
