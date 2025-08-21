<template>
  <div class="registration-page">
    <RegistrationForm />
    
    <div class="navigation">
      <router-link to="/participants" class="nav-link">
        Посмотреть участников ({{ participantsCount }})
      </router-link>
    </div>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'RegistrationPage',
  components: {
    RegistrationForm
  },
  computed: {
    ...mapGetters(['getParticipantsCount']),
    participantsCount() {
      return this.getParticipantsCount
    }
  }
}
</script>

<style scoped>
.registration-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  margin-top: 20px;
  text-align: center;
}

.nav-link {
  display: inline-block;
  padding: 12px 24px;
  background: white;
  color: #007bff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  background: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
