const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


exports.planCreated = functions.firestore
.document('plans/{planId}').onCreate(doc =>{
    const project = doc.data()
    const notification = {
        content: 'Added a new project',
        user: `${project.authFirstName} ${project.authLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
})  