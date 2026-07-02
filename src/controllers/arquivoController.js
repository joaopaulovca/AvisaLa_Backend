import Post from "../models/Post.js"
import crypto from 'node:crypto'
import { Sequelize, DataTypes, Op, Model } from 'sequelize'
import Arquivo from "../models/Arquivo.js"

export const createArquivo = async (req, res) => {
  try {
    const arquivoToCreate = {
      id: crypto.randomUUID(),
      ...req.body
    }

    const arquivo = await Arquivo.create(arquivoToCreate)
    res.status(201).json(arquivo)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteArquivo = async (req, res) => {
  const arquivo = await Arquivo.destroy({
    where: { id: req.params.id }
  })
  res.status(200).json(Arquivo)
}

export const getArquivoByID = async (req, res) => {
    const arquivo = await Arquivo.findByPk(req.params.id)
    res.status(200).json(arquivo)
}

export const updateArquivo = async (req, res) => {
  const [affectedRows] = await Arquivo.update(
    {
      post_id: req.body.post_id,
      ...req.body
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const arquivo = await arquivo.findByPk(req.params.id)
  res.status(200).json(arquivo)
}

export const getArquivosByPost = async (req, res) => {
  const arquivos = await Arquivo.findAll({ 
    where: { 
      post_id: req.params.id, 
    }
  });
  res.status(200).json(arquivos)
}
