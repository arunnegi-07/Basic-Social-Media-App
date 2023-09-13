let form = document.getElementById('form');
let input = document.getElementById('input');
let msgFailure = document.getElementById('failure-msg');
let msgSuccess = document.getElementById('success-msg');
let posts = document.getElementById('posts');

// Step 1: To prevent quick reload
form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    // Step 2: calling function to check status of text area
    formValidation();
})

// Checking if text area contains any message or not based on that performing further steps
let formValidation = () => {
    if(input.value === ""){
        // Failure Message
        msgFailure.innerHTML = "Post cannot be blank";
    }else{
        msgFailure.innerHTML = "";

        // Success Messsage
        msgSuccess.innerHTML = "Posted Sucessfully";

        // Set a timer to remove the message after 2 seconds
        setTimeout(() => {
            msgSuccess.innerHTML = "";
        }, 2000);
        

        // Step 3: if text area contains any message storing it so that 'post' can be created
        acceptData();
    }
}

let data = {};
let acceptData = () => {
    // storing data inside the text area
    data["text"] = input.value;
    

    // Step 4: creating post 
    createPost();
}

let createPost = () => {
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fas fa-edit" onClick="editPost(this)"></i>
            <i class="fas fa-trash-alt" onClick="deletePost(this)"></i>
        </span>
    </div>
    `;       

    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    deletePost(e);
}
