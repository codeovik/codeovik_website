# CodeOVIK official website

codeovik is our official(root company) for our project. It was image parallax effect, responsive, gsap text spilt hover animation, react router, personal certification and portfolio. also it is connected to backend Google app script. and deployed on google firebase.

## Screenshorts
![codeovik website screenshort](/readme/screenshort.png "This is a screenshort of this project")

## Links
* Website link: [Click here](https://codeovik.web.app/)

## Tech Stack
 * ReactJS
 * TailwindCSS
 * GSAP
 * Google App Script

## To run locally
```
git clone https://github.com/codeovik/codeovik_website.git
cd codeovik_website
npm install
npm run preview
```

## App script code
```
function doPost(e) {
  try {
    var rowData = {
      "Timestamp": new Date(),
      "Name": e.parameter.name || "",
      "Email": e.parameter.email || "",
      "Subject": e.parameter.subject || "",
      "Message": e.parameter.message || ""
    };

    var subject = "New message from codeovik website";
    var body = "📩 New Message:\n\n";

    for (var key in rowData) {
      body += key + ": " + rowData[key] + "\n";
    }

    MailApp.sendEmail("codeovik@gmail.com", subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({status: "success", data: rowData}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```