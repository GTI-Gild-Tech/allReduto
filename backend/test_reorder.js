// Script de teste para verificar a reordenação de categorias
const http = require('http');

const API_HOST = 'localhost';
const API_PORT = 3001;

function httpRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: API_HOST,
      port: API_PORT,
      path: `/api${path}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const response = body ? JSON.parse(body) : {};
          resolve({ status: res.statusCode, data: response });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function testReorder() {
  try {
    console.log('🧪 Iniciando testes de reordenação de categorias\n');

    // 1. Listar categorias atuais
    console.log('1️⃣ Listando categorias atuais...');
    let response = await httpRequest('GET', '/categories');
    let categories = response.data;
    console.table(categories.map(c => ({ id: c.category_id, name: c.name, order: c.order })));

    if (categories.length < 2) {
      console.log('❌ Necessário pelo menos 2 categorias para testar');
      return;
    }

    // 2. Mover primeira categoria para o final
    const firstCategory = categories[0];
    const lastPosition = categories.length - 1;
    
    console.log(`\n2️⃣ Movendo "${firstCategory.name}" (ID: ${firstCategory.category_id}) da posição 0 para posição ${lastPosition}...`);
    response = await httpRequest('PATCH', `/categories/${firstCategory.category_id}/reorder`, {
      newOrder: lastPosition
    });
    console.log('Resposta:', response.data.message);

    // 3. Verificar resultado
    console.log('\n3️⃣ Verificando resultado após reordenação...');
    response = await httpRequest('GET', '/categories');
    categories = response.data;
    console.table(categories.map(c => ({ id: c.category_id, name: c.name, order: c.order })));

    // 4. Mover de volta para a posição original
    console.log(`\n4️⃣ Movendo "${firstCategory.name}" de volta para posição 0...`);
    response = await httpRequest('PATCH', `/categories/${firstCategory.category_id}/reorder`, {
      newOrder: 0
    });
    console.log('Resposta:', response.data.message);

    // 5. Verificar resultado final
    console.log('\n5️⃣ Verificando resultado final...');
    response = await httpRequest('GET', '/categories');
    categories = response.data;
    console.table(categories.map(c => ({ id: c.category_id, name: c.name, order: c.order })));

    console.log('\n✅ Testes concluídos com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante os testes:', error.message);
  }
}

testReorder();
