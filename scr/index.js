const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('- Costa Rica Tech Job API 👩‍🔧 -')
})

app.listen(8002, () => {
    console.log(`🚀 Example app listening on port 8002`)
})

app.put('/materias/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const updatedMateria = await prisma.materia.update({
            where: { id: Number(id) },
            // req.body es la info que manda el usuario para actualizar
            data: req.body
        });
        res.json(updatedMateria);
    } catch (e) {
        res.json({ error: `Materia con el id ${id} no existe` })
    }
})

app.put('/estudiantes/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const updatedEstudiante = await prisma.estudiante.update({
            where: { id: Number(id) },
            // req.body es la info que manda el usuario para actualizar
            data: req.body
        });
        res.json(updatedEstudiante);
    } catch (e) {
        res.json({ error: `Estudiante con el id ${id} no existe` })
    }
})

////All post
app.post('/materia', async(req, res) => {
    const result = await prisma.materia.create({
        // req.body es la info que manda el usuario para crear
        data: req.body
    });
    res.json(result);
})
app.post('/estudiante', async(req, res) => {
    const result = await prisma.estudiante.create({
        data: req.body
    });
    res.json(result);
})
app.post('/facultad', async(req, res) => {
    const result = await prisma.facultad.create({
        data: req.body
    });
    res.json(result);
})
app.post('/profesor', async(req, res) => {
        const result = await prisma.profesor.create({
            data: req.body
        });
        res.json(result);
    })
    /////finish all post


//Delete/////
app.delete(`/materia/:id`, async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.materia.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(mate)
})

app.delete(`/estudiante/:id`, async(req, res) => {
    const { id } = req.params;
    const estu = await prisma.estudiante.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(estu);
});
app.delete(`/profesor/:id`, async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.profesor.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(mate)
})

app.delete(`/facultad/:id`, async(req, res) => {
    const { id } = req.params;
    const estu = await prisma.facultad.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(estu);
});
///Delete finish///

///Gen normales/////
app.get('/materias', async(req, res) => {
    const mate = await prisma.materia.findMany();
    res.json(mate);
});
app.get('/estudiantes', async(req, res) => {
    const mate = await prisma.estudiante.findMany();
    res.json(mate);
});
app.get('/profesores', async(req, res) => {
    const mate = await prisma.profesor.findMany();
    res.json(mate);
});
app.get('/facultades', async(req, res) => {
    const mate = await prisma.facultad.findMany();
    res.json(mate);
});
///Fin de Gets normales


//// gets con id
app.get('/materias/:id', async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.materia.findMany({
        where: {
            id: Number(id),
        }
    });
    res.json(mate);
});

app.get('/estudiantes/:id', async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.estudiante.findMany({
        where: {
            id: Number(id),
        }
    });
    res.json(mate);
});
app.get('/profesor/:id', async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.profesor.findMany({
        where: {
            id: Number(id),
        }
    });
    res.json(mate);
});

app.get('/facultad/:id', async(req, res) => {
    const { id } = req.params;
    const mate = await prisma.facultad.findMany({
        where: {
            id: Number(id),
        }
    });
    res.json(mate);
});
///// Fin de los gets con id


//// CRUD FACULTAD/////
app.get('/facultad/:id/estudiantes', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const estudiantes = await prisma.estudiante.findMany({
        where: {
            facultad_id: Number(id)
        }
    });

    res.json(estudiantes);
});

app.get('/facultad/:id/profesores', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const profesores = await prisma.profesor.findMany({
        where: {
            facultad_id: Number(id)
        }
    });

    res.json(profesores);
});
///// Fin de CRUD facultad

///Crud de profesor

app.get('/profesor/:id/estudiantes', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const profesores = await prisma.estudiante.findMany({
        where: {
            profesor_id: Number(id)
        }
    });

    res.json(profesores);
});

app.get('/profesor/:id/materias', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const profesores = await prisma.materias.findMany({
        where: {
            porfesor_id: Number(id)
        }
    });

    res.json(profesores);
});

///CRUD Restante///
app.get('/materia/:id/estudiantes', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const materias = await prisma.estudiante.findMany({
        where: {
            estudinate_id: Number(id)
        }
    });

    res.json(materias);
});

app.get('/estudiante/:id/profesor', async(req, res) => {
    const { id } = req.params;
    // const id = req.params.id

    const estudiante = await prisma.profesor.findMany({
        where: {
            porfesor_id: Number(id)
        }
    });

    res.json(profesores);
});


// app.get('/jobs/:id/employees', async(req, res) => {
//     const { id } = req.params;
//     // const id = req.params.id

//     const employees = await prisma.employee.findMany({
//         where: {
//             job_id: Number(id)
//         }
//     });

//     res.json(employees);
// });



// app.get('/employees', async(req, res) => {
//     let employees = await prisma.employee.findMany();
//     for (const employee of employees) {
//         const job = await prisma.job.findUnique({
//             where: {
//                 id: employee.job_id
//             }
//         })
//         employee.job = job
//     }
//     res.json(employees);
// }) res.json(employees);