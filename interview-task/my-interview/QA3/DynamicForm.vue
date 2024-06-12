<template>
    <form @submit.prevent="handleSubmit">
      <div v-for="block in formSchema.blocks" :key="block.token">
        <label :for="block.token">{{ block.props.title }}</label>
        <input
          v-if="block.type === 'text'"
          :id="block.token"
          :placeholder="block.props.placeholder"
          v-model="formData[block.token]"
          :required="isRequired(block)"
          type="text"
        />
        <input
          v-if="block.type === 'date'"
          :id="block.token"
          :placeholder="block.props.placeholder"
          v-model="formData[block.token]"
          :required="isRequired(block)"
          type="date"
        />
        <input
          v-if="block.type === 'checkbox'"
          :id="block.token"
          v-model="formData[block.token]"
          type="checkbox"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'DynamicForm',
    data() {
      return {
        formSchema: {
          blocks: [
            {
              token: "PERSON_NAME",
              type: "text",
              props: {
                title: "Enter your name",
                required: true,
                placeholder: "e.g. John Doe"
              }
            },
            {
              token: "IS_PERSON_MINOR",
              type: "checkbox",
              props: {
                title: "Is the Current person minor?",
                default: false
              }
            },
            {
              token: "PERSON_DOB",
              type: "date",
              props: {
                title: "Enter your DOB",
                required: "IS_PERSON_MINOR",
                placeholder: "e.g. 01/01/2000"
              }
            }
          ]
        },
        formData: {
          PERSON_NAME: '',
          IS_PERSON_MINOR: false,
          PERSON_DOB: ''
        }
      };
    },
    methods: {
      isRequired(block) {
        if (typeof block.props.required === 'boolean') {
          return block.props.required;
        } else if (typeof block.props.required === 'string') {
          return this.formData[block.props.required];
        }
        return false;
      },
      handleSubmit() {
        let isValid = true;
  
        this.formSchema.blocks.forEach(block => {
          if (this.isRequired(block) && !this.formData[block.token]) {
            isValid = false;
            alert(`Field ${block.props.title} is required`);
          }
        });
  
        if (isValid) {
          console.log('Form data:', this.formData);
          alert('Form submitted successfully!');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  
  div {
    margin-bottom: 1rem;
  }
  
  label {
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="date"],
  input[type="checkbox"] {
    margin-bottom: 0.5rem;
  }
  
  button {
    align-self: flex-start;
  }
  </style>
  