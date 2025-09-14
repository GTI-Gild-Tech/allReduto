// A importação deve ser feita a partir do arquivo index.js da pasta models
// que já exporta todos os modelos configurados.
const { User } = require('../models');

// Função para listar todos os usuários
// Método: GET /api/users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuários.', error: error.message });
  }
}

// Função para buscar um usuário por ID
// Método: GET /api/users/:id
async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuário.', error: error.message });
  }
}

// Função para criar um novo usuário
// Método: POST /api/users
async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message });
  }
}

// Função para atualizar um usuário existente
// Método: PUT /api/users/:id
async function updateUser(req, res) {
  try {
    const [updatedRows] = await User.update(req.body, {
      where: { id: req.params.id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado para atualização.' });
    }

    const updatedUser = await User.findByPk(req.params.id);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário.', error: error.message });
  }
}

// Função para deletar um usuário
// Método: DELETE /api/users/:id
async function deleteUser(req, res) {
  try {
    const deletedRows = await User.destroy({
      where: { id: req.params.id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado para exclusão.' });
    }

    return res.status(204).end(); // 204 No Content - Sucesso sem retorno
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar usuário.', error: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};