<template>
  <div class="participants-list">
    <h2>Зарегистрированные участники</h2>
    
    <div v-if="participants.length === 0" class="no-participants">
      Пока нет зарегистрированных участников
    </div>
    
    <div v-else>
      <div class="participants-count">
        Всего участников: {{ participantsCount }}
      </div>
      
      <div class="participants-grid">
        <div 
          v-for="participant in participants" 
          :key="participant.id"
          class="participant-card"
        >
          <div class="participant-header">
            <h3>{{ participant.firstName }} {{ participant.lastName }}</h3>
          </div>
          
          <div class="participant-info">
            <div class="info-row">
              <strong>Email:</strong> {{ participant.email }}
            </div>
            <div class="info-row">
              <strong>Телефон:</strong> {{ participant.phone }}
            </div>
            <div v-if="participant.birthDate" class="info-row">
              <strong>Дата рождения:</strong> {{ formatDate(participant.birthDate) }}
            </div>
            <div v-if="participant.city" class="info-row">
              <strong>Город:</strong> {{ participant.city }}
            </div>
            <div class="info-row">
              <strong>Дата регистрации:</strong> {{ participant.registrationDate }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ParticipantsList',
  computed: {
    ...mapGetters(['getAllParticipants', 'getParticipantsCount']),
    participants() {
      return this.getAllParticipants
    },
    participantsCount() {
      return this.getParticipantsCount
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU')
    }
  }
}
</script>

<style scoped>
.participants-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.participants-count {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}

.no-participants {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 8px;
}

.participants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.participant-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.participant-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.participant-header {
  background: #007bff;
  color: white;
  padding: 15px;
}

.participant-header h3 {
  margin: 0;
  font-size: 18px;
}

.participant-info {
  padding: 15px;
}

.info-row {
  margin-bottom: 8px;
  line-height: 1.4;
}

.info-row:last-child {
  margin-bottom: 0;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}
</style>
