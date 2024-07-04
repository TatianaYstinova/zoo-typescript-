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
    typeFood: "grass"
  },
  {
    id: 2,
    species: animalSpecies[1],
    name: 'Мишка',
    dailyFoodConsumption: 90,
    typeFood: "meat"
  },
  {
    id: 3,
    species: animalSpecies[2],
    name: 'Гоша',
    dailyFoodConsumption: 20,
    typeFood: "grass"
  },
  {
    id: 4,
    species: animalSpecies[3],
    name: 'Сара',
    dailyFoodConsumption: 50,
    typeFood: "grass"
  },
  {
    id: 5,
    species: animalSpecies[4],
    name: 'Мишка',
    dailyFoodConsumption: 90,
    typeFood: "meat"
  },
  {
    id: 6,
    species: animalSpecies[5],
    name: 'МишкаПервый',
    dailyFoodConsumption: 190,
    typeFood: "grass"
  },
  {
    id: 7,
    species: animalSpecies[6],
    name: 'Ярик',
    dailyFoodConsumption: 20,
    typeFood: "meat"
  },
  {
    id: 8,
    species: animalSpecies[7],
    name: 'Нурсултан',
    dailyFoodConsumption: 30,
    typeFood: "meat"
  },
  {
    id: 9,
    species: animalSpecies[8],
    name: 'Мага',
    dailyFoodConsumption: 60,
    typeFood: "grass"
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

settleOrRemoveAnimalFromTheEnclosure(individualAnimals[0], enclosures[4], "settle");

const result3 = amountOfFoodAllAvailableAnimalsInAllAnclosures(enclosures);
console.log({ result3 });


export { };