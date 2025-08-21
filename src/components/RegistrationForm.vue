<template>
  <div class="registration-form">
    <h2>Форма регистрации</h2>
    
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="firstName">Имя *</label>
        <input
          id="firstName"
          v-model="formData.firstName"
          type="text"
          :class="{ 'error': errors.firstName }"
          @blur="validateField('firstName')"
        />
        <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
      </div>

      <div class="form-group">
        <label for="lastName">Фамилия *</label>
        <input
          id="lastName"
          v-model="formData.lastName"
          type="text"
          :class="{ 'error': errors.lastName }"
          @blur="validateField('lastName')"
        />
        <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          :class="{ 'error': errors.email }"
          @blur="validateField('email')"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="phone">Телефон *</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          :class="{ 'error': errors.phone }"
          @blur="validateField('phone')"
        />
        <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label for="birthDate">Дата рождения</label>
        <input
          id="birthDate"
          v-model="formData.birthDate"
          type="date"
        />
      </div>

      <div class="form-group">
        <label for="city">Город</label>
        <input
          id="city"
          v-model="formData.city"
          type="text"
        />
      </div>

      <button 
        type="submit" 
        class="submit-btn"
        :disabled="!isFormValid"
      >
        Зарегистрироваться
      </button>
    </form>

    <div v-if="showSuccess" class="success-message">
      ✅ Регистрация прошла успешно!
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        city: ''
      },
      errors: {},
      showSuccess: false
    }
  },
  computed: {
    isFormValid() {
      const requiredFields = ['firstName', 'lastName', 'email', 'phone']
      return requiredFields.every(field => 
        this.formData[field] && !this.errors[field]
      )
    }
  },
  methods: {
    validateField(fieldName) {
      this.errors = { ...this.errors }
      
      switch (fieldName) {
        case 'firstName':
        case 'lastName': {
          if (!this.formData[fieldName]) {
            this.errors[fieldName] = 'Это поле обязательно для заполнения'
          } else if (this.formData[fieldName].length < 2) {
            this.errors[fieldName] = 'Минимум 2 символа'
          } else {
            delete this.errors[fieldName]
          }
          break
        }
          
        case 'email': {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!this.formData.email) {
            this.errors.email = 'Email обязателен'
          } else if (!emailRegex.test(this.formData.email)) {
            this.errors.email = 'Неверный формат email'
          } else {
            delete this.errors.email
          }
          break
        }
          
        case 'phone': {
          const phoneRegex = /^\+?[1-9]\d{1,14}$/
          if (!this.formData.phone) {
            this.errors.phone = 'Телефон обязателен'
          } else if (!phoneRegex.test(this.formData.phone.replace(/\s/g, ''))) {
            this.errors.phone = 'Неверный формат телефона'
          } else {
            delete this.errors.phone
          }
          break
        }

        default:
          break
      }
    },
    
    validateForm() {
      const requiredFields = ['firstName', 'lastName', 'email', 'phone']
      requiredFields.forEach(field => this.validateField(field))
    },
    
    submitForm() {
      this.validateForm()
      
      if (this.isFormValid) {
        this.$store.dispatch('addParticipant', this.formData)
        this.showSuccess = true
        this.resetForm()
        
        setTimeout(() => {
          this.showSuccess = false
        }, 3000)
      }
    },
    
    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        city: ''
      }
      this.errors = {}
    }
  }
}
</script>

<style scoped>
.registration-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

input.error {
  border-color: #dc3545;
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background: #0056b3;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.success-message {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-top: 20px;
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
</style>
