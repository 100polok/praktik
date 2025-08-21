<template>
  <div class="participants-page">
    <ParticipantsList />
    
    <div class="navigation">
      <router-link to="/registration" class="nav-link">
        ← Вернуться к регистрации
      </router-link>
    </div>
  </div>
</template>

<script>
import ParticipantsList from '@/components/ParticipantsList.vue'

export default {
  name: 'ParticipantsPage',
  components: {
    ParticipantsList
  }
}
</script>

<style scoped>
.participants-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
}

.navigation {
  text-align: center;
  margin-top: 30px;
}

.nav-link {
  display: inline-block;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
