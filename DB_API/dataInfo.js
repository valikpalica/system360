const type_anceta = require('../Data/type_anceta.json');
const competence = require('../Data/competence.json');
const quastion = require('../Data/quastion.json');
const Type_anceta = require('../DB_API/models/Type_anceta');
const Compatence = require('../DB_API/models/competence');
const Quastion = require('../DB_API/models/quastion');
const Ralation_competence = require('../DB_API/models/ralation_competens');
const Ralation_quastion = require('../DB_API/models/ralation_quastion');
const comanderTest = require('../Data/comanderTest.json');
const Main_Quastion = require('../DB_API/models/Main_quastion');
const Ralation_main_second_quastion =  require('../DB_API/models/Ralation_main_second_quastion');
const Second_quastion = require('../DB_API/models/Second_quastion');
let index_for_ralation_main_and_second = 0;

const read = async () =>{
    try {
        //console.log(type_anceta);
        type_anceta.forEach(async (item)=>{
           await Type_anceta.create({
                        id_type_anceta: item.id,
                        type_anceta:item.type
                    })
        });
       // console.log(competence);
        competence.forEach(item=>{
            Compatence.create({
                competence:item.name
            }).then(data=>{
                //console.log(data)
            }).catch(err=>{
                throw new Error(err);
            });
        })
        //console.log(quastion);
        quastion.forEach(item=>{
            Quastion.create({
                quastion:item.name
            }).then(data=>{
                //console.log(data);
            }).catch(err=>{
                throw new Error(err);
            })
        }); 
        //console.log(quastion.type);
       quastion.forEach((obj,index)=>{
            let {types} = obj;
            ++index
            types.forEach(item=>{
                //console.log(index,item);
                Ralation_quastion.create({
                    id_quastion:index,
                    id_type_q:item
                }).then(data=>{
                    //console.log(data);
                }).catch(err=>{
                    throw new Error(err);
                })
            })
       });
       competence.forEach((obj,index)=>{
           let {types} = obj;
           ++index;
           types.forEach(item=>{
               Ralation_competence.create({
                id_competence:index,
                id_type_c:item
               }).then(data=>{
                   //console.log(data);
               }).catch(err=>{
                   throw new Error(err);
               });
           })
       })
       comanderTest.data.forEach(async (item,index)=>{
            try {
            let data  = await Main_Quastion.create({
                id_type_anceta:comanderTest.type,
                name_main_quastion:item.main
            });
            await write_second_quastion(item.second,++index);
            
            } catch (error) {
                throw new Error(error);
            }
       });
    } catch (error) {
        console.error(error);
        return false;
    }
}

const write_second_quastion  = async (array,main_index) =>{
    array.forEach(async (item)=>{
        try {
            let data  = await Second_quastion.create({
                name_quastion:item
            });
            await write_ralation_main_second(main_index,++index_for_ralation_main_and_second);
        } catch (error) {
            throw new Error(error);
        }
    });
};

const write_ralation_main_second = async (id_main,id_second) =>{
    //console.log(id_main,id_second);

    try {
        let data = await Ralation_main_second_quastion.create({
            id_main_quastion:id_main,
            id_second_quastion:id_second,
        });
    } catch (error) {
        throw new Error(error);
    }
};

read();