const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = (notification) =>{
    return admin.firestore().collection('notifications').add(
        notification
    ).then(doc => console.log(doc, 'new notification'))
}

exports.planCreated = functions.firestore
.document('plans/{planId}').onCreate(doc =>{
    const project = doc.data()
    const notification = {
        content: 'Shared a new plan',
        user: `${project.authFirstName} ${project.authLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
}) 

exports.userJoined = functions.auth.user().onCreate(user =>{
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc =>{
        const newUser =     doc.data()
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstname} ${newUser.lastname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification)
    }) 
})

