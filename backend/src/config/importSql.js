const fs = require('fs');
const path = require('path');
const { sequelize } = require('../models');

async function importSQL() {
  try {
    const sqlPath = path.join(__dirname, '..', '..', 'cafeteria.sql');
    
    // Verificar se arquivo existe
    if (!fs.existsSync(sqlPath)) {
      console.error('❌ Arquivo cafeteria.sql não encontrado!');
      return;
    }

    const sqlScript = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('📋 Importando script SQL...');
    
    // Executar o script SQL
    await sequelize.query(sqlScript);
    
    console.log('✅ Script SQL importado com sucesso!');
    
    // Sincronizar com Sequelize
    await sequelize.sync();
    console.log('✅ Banco sincronizado com Sequelize!');
    
  } catch (error) {
    console.error('❌ Erro ao importar SQL:', error);
  } finally {
    await sequelize.close();
  }
}

// Executar só se chamado diretamente
if (require.main === module) {
  importSQL();
}

module.exports = importSQL;