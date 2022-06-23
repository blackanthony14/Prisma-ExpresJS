const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { number } = require('joi');
const prisma = new PrismaClient();
//const router = require('./router');

//const bodyParser = require('body-parser');

const HOST = 'localhost';
const PORT = 3306;
const app = express();
app.use(express.json())

// iniciar server

app.listen(PORT, () => {
    console.log('Server en ', HOST, ' puerto ', PORT);
});

app.post('/', async(req, res) => {
    const { primer_nombre, primer_apellido, edad, pais_origen, carrera, materias_cursadas, es_moroso, deuda_ciclo_actual } = req.body;
    const estudiante = await prisma.estudiante.create({
        data: {
            primer_nombre: primer_nombre,
            primer_apellido: primer_apellido,
            edad: edad,
            pais_origen: pais_origen,
            carrera: carrera,
            materias_cursadas: materias_cursadas,
            es_moroso: es_moroso,
            deuda_ciclo_actual: deuda_ciclo_actual
        },
    });
    res.json(estudiante);
});

app.get('/', async(req, res) => {
    const estudiantes = await prisma.estudiante.findMany({
        select: {
            id: true,
            primer_nombre: true,
            primer_apellido: true
        }
    });
    res.json(estudiantes)
})

app.get('/byId/:id', async(req, res) => {
    const id = Number(req.params.id);
    const estu = await prisma.estudiante.findUnique({
        where: {
            Id: id,
        },
    });
    res.json(estu)
});


// app.put("/:id", async(req, res) => {
//     const { titulo, autor, descripcion } = req.body;
//     const id = Number(req.params.id);

//     const updateLibro = await prisma.libros.update({
//         where: {
//             Id: id,
//         },
//         data: {
//             titulo: titulo,
//             autor: autor,
//             descripcion: descripcion
//         },
//     });
//     res.json(updateLibro)
// });

app.delete('/byId/:id', async(req, res) => {
    const id = Number(req.params.id);
    const deleteUser = await prisma.estudiante.delete({
        where: {
            Id: id,
        },
    });
    res.json(deleteUser);
});

app.delete('/estudiantes', async(req, res) => {
    const delLibros = await prisma.estudiante.deleteMany();
    res.json(delLibros);
})

////////////////////////////////////////////////////////////////


app.post('/carrera', async(req, res) => {
    const { nombre, codigo, profesor, inicales_profesor, creditos, carrera } = req.body;
    const estudiante = await prisma.materia.create({
        data: {
            nombre: nombre,
            codigo: codigo,
            profesor: profesor,
            inicales_profesor: inicales_profesor,
            creditos: creditos,
            carrera: carrera,
        },
    });
    res.json(estudiante);
});

app.get('/carrera', async(req, res) => {
    const estudiantes = await prisma.materia.findMany({
        select: {
            id: true,
            nombre: true,
            codigo: true,
            iniciales_profesor: true
        }
    });
    res.json(estudiantes)
})

app.get('/carrera/byId/:id', async(req, res) => {
    const id = Number(req.params.id);
    const estu = await prisma.materia.findUnique({
        where: {
            Id: id,
        },
    });
    res.json(estu)
});