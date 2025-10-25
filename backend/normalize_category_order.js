// Script para normalizar os valores de order das categorias existentes
const { Category } = require('./src/models');

async function normalizeOrders() {
  try {
    console.log('Iniciando normalização dos valores de order...');
    
    // Buscar todas as categorias ordenadas por created_at
    const categories = await Category.findAll({
      order: [['created_at', 'ASC']]
    });

    console.log(`Encontradas ${categories.length} categorias`);

    // Atualizar cada categoria com um valor único de order
    for (let i = 0; i < categories.length; i++) {
      await categories[i].update({ order: i });
      console.log(`✓ ${categories[i].name} -> order: ${i}`);
    }

    console.log('\n✅ Normalização concluída com sucesso!');
    
    // Verificar resultado
    const result = await Category.findAll({
      order: [['order', 'ASC']],
      attributes: ['category_id', 'name', 'order']
    });
    
    console.log('\nResultado final:');
    console.table(result.map(c => ({ id: c.category_id, name: c.name, order: c.order })));
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao normalizar orders:', error);
    process.exit(1);
  }
}

normalizeOrders();
