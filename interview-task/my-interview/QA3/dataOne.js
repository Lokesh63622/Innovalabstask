"blocks": [
    {
    "token": "PERSON_NAME",
    "type": "text",
    "props":{
    "title": "Enter your name",
    "required": true,
    "placeholder": "e.g. John Doe"
}
},
 {   
    "token": "IS_PERSON_MINOR", 
    "type": "checkbox",
    "props":{
    "title": "Is the Current person minor?",
    "default": false
    }
},
{ 
    "token": "PERSON DOB",
    "type": "date",
    "props":{
    "title": "Enter your BOD",
    "required" :"IS_PERSON_MINOR",
    "placeholder" :"e.g. 01/01/2000"
    }
}
]