// Интерфейс для описания зоопарка
interface Zoo {
  enclosures: Enclosure[]; // Вольеры в зоопарке
}

// Интерфейс для описания вольера
interface Enclosure {
  biome: Biome; // Биом вольера
  area: number; // Площадь вольера
  waterSource: boolean; // Наличие водоема в вольере
  animal: IndividualAnimal[];

}

// Интерфейс для описания вида животных
interface AnimalSpecies {
  name: string; // Название вида
  requiredBiome: Biome; // Необходимый биом для вида
  needsWaterSource: boolean; // Необходимо ли наличие водоема
  requiredAreaPerIndividual: number; // Необходимая площадь на особь
  diet: Diet; // Что животное ест
}

// Интерфейс для описания конкретного животного
interface IndividualAnimal {
  species: AnimalSpecies; // Вид животного
  name: string; // Имя животного
  dailyFoodConsumption: number; // Сколько животное съедает в день
  typeFood: Food;
  id: number;
  photo: string
}
interface IsPossibleToPlaceAnimalInEnclosure {
  isPossible: boolean;
  cause: string[];
}

// Тип для биома
type Biome = 'desert' | 'jungle' | 'prairies' | 'savanna';

// Тип для диеты
type Diet = 'carnivore' | 'herbivore';

//Тип еды
type Food = "meat" | "grass"

const enclosures: Enclosure[] = [
  {
    biome: "desert",
    area: 10000,
    waterSource: true,
    animal: []
  },
  {
    biome: "desert",
    area: 10000,
    waterSource: false,
    animal: []
  },
  {
    biome: "jungle",
    area: 10000,
    waterSource: true,
    animal: []
  },
  {
    biome: "prairies",
    area: 10000,
    waterSource: true,
    animal: []
  },
  {
    biome: "savanna",
    area: 10000,
    waterSource: true,
    animal: []
  },


]
const animalSpecies: AnimalSpecies[] = [
  {
    name: 'Жираф',
    requiredBiome: 'savanna',
    needsWaterSource: true,
    requiredAreaPerIndividual: 1000,
    diet: 'herbivore',

  },
  {
    name: 'Леопард',
    requiredBiome: 'savanna',
    needsWaterSource: true,
    requiredAreaPerIndividual: 1100,
    diet: 'carnivore',

  },
  {
    name: 'Фламинго',
    requiredBiome: 'prairies',
    needsWaterSource: true,
    requiredAreaPerIndividual: 100,
    diet: 'herbivore',
  },
  {
    name: 'Бизон',
    requiredBiome: 'prairies',
    needsWaterSource: true,
    requiredAreaPerIndividual: 1400,
    diet: 'herbivore',
  },
  {
    name: 'Тигр',
    requiredBiome: 'jungle',
    needsWaterSource: true,
    requiredAreaPerIndividual: 1000,
    diet: 'carnivore',

  },
  {
    name: 'Капибара',
    requiredBiome: 'jungle',
    needsWaterSource: true,
    requiredAreaPerIndividual: 1000,
    diet: 'herbivore',
  },
  {
    name: 'Сурикат',
    requiredBiome: 'desert',
    needsWaterSource: false,
    requiredAreaPerIndividual: 1200,
    diet: 'carnivore',
  },
  {
    name: 'Варан',
    requiredBiome: 'desert',
    needsWaterSource: false,
    requiredAreaPerIndividual: 1700,
    diet: 'carnivore',
  },
  {
    name: 'Верблюд',
    requiredBiome: 'desert',
    needsWaterSource: false,
    requiredAreaPerIndividual: 100,
    diet: 'herbivore',
  },
]

// Примеры конкретных животных
const individualAnimals: IndividualAnimal[] = [
  {
    id: 1,
    species: animalSpecies[0],
    name: 'Машка',
    dailyFoodConsumption: 70,
    typeFood: "grass",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hoc7W7T44-uSy_aR_4uBQ43BSZTiCOtyJA&s"
  },
  {
    id: 2,
    species: animalSpecies[1],
    name: 'Мишка',
    dailyFoodConsumption: 90,
    typeFood: "meat",
    photo: "https://i.imgflip.com/2dgwnk.jpg?a477288"
  },
  {
    id: 3,
    species: animalSpecies[2],
    name: 'Гоша',
    dailyFoodConsumption: 20,
    typeFood: "grass",
    photo: "https://poknok.art/uploads/posts/2022-12/1672152725_1-poknok-art-p-flamingo-prikol-foto-1.jpg"
  },
  {
    id: 4,
    species: animalSpecies[3],
    name: 'Сара',
    dailyFoodConsumption: 50,
    typeFood: "grass",
    photo: "https://i.pinimg.com/736x/c4/66/20/c466204c9f98adccc3ce0f4b0b281c91.jpg"
  },
  {
    id: 5,
    species: animalSpecies[4],
    name: 'Мишка',
    dailyFoodConsumption: 90,
    typeFood: "meat",
    photo: "https://www.prikol.ru/wp-content/uploads/2017/02/fat-tiger-001.jpg"
  },
  {
    id: 6,
    species: animalSpecies[5],
    name: 'МишкаПервый',
    dailyFoodConsumption: 190,
    typeFood: "grass",
    photo: "https://i.ytimg.com/vi/jKKTtR5E18Q/maxresdefault.jpg"
  },
  {
    id: 7,
    species: animalSpecies[6],
    name: 'Ярик',
    dailyFoodConsumption: 20,
    typeFood: "meat",
    photo: "https://i.pinimg.com/originals/86/ab/7f/86ab7f6dee7b98af0852910ca545a378.jpg"
  },
  {
    id: 8,
    species: animalSpecies[7],
    name: 'Нурсултан',
    dailyFoodConsumption: 30,
    typeFood: "meat",
    photo: "https://img.razrisyika.ru/kart/59/232055-varan-18.jpg"
  },
  {
    id: 9,
    species: animalSpecies[8],
    name: 'Мага',
    dailyFoodConsumption: 60,
    typeFood: "grass",
    photo: "https://img.freepik.com/free-photo/joyful-camel-having-fun_23-2151058766.jpg"
  },
];

//функцию, которая определяет, можно ли подселить животное в вольер, и если нет - то почему?
function isPossibleToPlaceAnimalInEnclosure(animal: IndividualAnimal, enclosure: Enclosure): IsPossibleToPlaceAnimalInEnclosure {
  const cause: string[] = [];

  // Проверка на соответствие биома
  if (animal.species.requiredBiome !== enclosure.biome) {
    cause.push(`Биом вольера ${enclosure.biome} не соответствует требуемому биому животного ${animal.species.requiredBiome}`);
  }

  // Проверка на наличие водоема
  if ((animal.species.needsWaterSource && !enclosure.waterSource) || (!animal.species.needsWaterSource && enclosure.waterSource)) {
    cause.push('Водоем в вольере не соответствует требованиям животного');
  }

  // Проверка на достаточность площади
  if (enclosure.area < animal.species.requiredAreaPerIndividual) {
    cause.push('Площадь вольера недостаточна для размещения животного');
  }

  // Проверка на возможность совместного проживания разных видов

  const hasPredators = enclosure.animal.some((_animal) => _animal.species.diet === 'carnivore');

  if ((animal.species.diet === 'herbivore') && hasPredators) {
    cause.push('Травоядное животное не может жить с хищником');
  }


  if (cause.length > 0) {
    return {
      isPossible: false,
      cause: cause
    };
  }

  // Если причин для отказа нет, подселение возможно
  return {
    isPossible: true,
    cause: []
  };

}



const settleOrRemoveAnimalFromTheEnclosure = (animal: IndividualAnimal, enclosure: Enclosure, action: 'settle' | 'delete') => {
  if (action === 'settle') {
    const { cause, isPossible } = isPossibleToPlaceAnimalInEnclosure(animal, enclosure);

    if (isPossible) {
      enclosure.animal.push(animal);

      enclosure.area -= animal.species.requiredAreaPerIndividual;

      console.log(`${animal.name} было добавлено в вольер ${enclosure.biome}`);
    } else {
      console.error(`Не удалось добавить ${animal.name} в вольер ${enclosure.biome}. Причины: ${cause.join(', ')}.`);
    }
  } else if (action === "delete") {
    const index = enclosure.animal.findIndex((enclosureAnimal) => enclosureAnimal.id === animal.id);

    if (index !== -1) {
      enclosure.animal.splice(index, 1);
      enclosure.area += animal.species.requiredAreaPerIndividual;
      console.log(`${animal.name} было удалено из вольера`);
    }
  }

  console.log({ result4: enclosure.animal })
}

//const result1 = settleOrRemoveAnimalFromTheEnclosure(individualAnimals[0], enclosures[0], "settle");

function amountOfFoodAllAvailableAnimalsInAllAnclosures(enclosures: Enclosure[]): number {

  return enclosures.reduce((totalFood, enclosure) => {

    const dailyFoodConsumption = enclosure.animal.reduce((summ, animal) => summ + animal.dailyFoodConsumption, 0);

    const resulr = totalFood + dailyFoodConsumption

    return resulr;
  }, 0)
}

//settleOrRemoveAnimalFromTheEnclosure(individualAnimals[0], enclosures[4], "settle");

//const result3 = amountOfFoodAllAvailableAnimalsInAllAnclosures(enclosures);
//console.log({ result3 });


const cardAnimal = document.querySelector('.container-animal');
for (let animal of individualAnimals) {
  const newDiv = document.createElement('div');
  cardAnimal?.appendChild(newDiv);
  newDiv.innerHTML = `
    <div class="animal-card">
      <img class="photo-animal" src="${animal.photo}"/>
      <div class="name">${animal.name}</div>
     <div class="species">${animal.species.name}</div>
    </div>`

}

const enclosuresZoo = document.querySelector('.container-zoo');
for (let enclosure of enclosures) {
  const newDiv = document.createElement('div');
  enclosuresZoo?.appendChild(newDiv);
  newDiv.innerHTML = `
  <div class="enclosure">
     <div class="biome"> ${enclosure.biome}</div>
     <div class="waterSource">${enclosure.waterSource}</div>
  </div>`


}

export { };