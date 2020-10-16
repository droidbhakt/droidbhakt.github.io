fileButton.addEventListener('change', function(e){
    for(let i=0; i<e.target.files.length;i++){
        let imageFile = e.target.files[i];

        let storageRef = firebase.storage().ref("Images/" + imageFile.name);

        let task = storageRef.put(imageFile);

        task.on('state_changed',function progress(snapshot){

            let percentage = snapshot.bytesTransferred/snapshot.totalBytes *100;
            
            console.log("Upload is "+ percentage + "done");
            switch (snapshot.state){
                case firebase.storage.TaskState.PAUSED :
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING :
                    console.log("Upload is Running");
                    break;
            }
        })
    }
})