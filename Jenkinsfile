pipeline {
  agent any
  stages {
    stage('Pre-Build') {
      steps {
        echo 'Espacio de trabajo'
      }
    }

    stage('Test') {
      steps {
        echo 'Etapa Test en desarrollo. OK'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

  }
}