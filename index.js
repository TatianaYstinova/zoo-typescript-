"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enclosures = [
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
];
var animalSpecies = [
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
];
// Примеры конкретных животных
var individualAnimals = [
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
function isPossibleToPlaceAnimalInEnclosure(animal, enclosure) {
    var cause = [];
    // Проверка на соответствие биома
    if (animal.species.requiredBiome !== enclosure.biome) {
        cause.push("\u0411\u0438\u043E\u043C \u0432\u043E\u043B\u044C\u0435\u0440\u0430 ".concat(enclosure.biome, " \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u043E\u043C\u0443 \u0431\u0438\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E ").concat(animal.species.requiredBiome));
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
    var hasPredators = enclosure.animal.some(function (_animal) { return _animal.species.diet === 'carnivore'; });
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
var settleOrRemoveAnimalFromTheEnclosure = function (animal, enclosure, action) {
    if (action === 'settle') {
        var _a = isPossibleToPlaceAnimalInEnclosure(animal, enclosure), cause = _a.cause, isPossible = _a.isPossible;
        if (isPossible) {
            enclosure.animal.push(animal);
            enclosure.area -= animal.species.requiredAreaPerIndividual;
            console.log("".concat(animal.name, " \u0431\u044B\u043B\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0432\u043E\u043B\u044C\u0435\u0440 ").concat(enclosure.biome));
        }
        else {
            console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C ".concat(animal.name, " \u0432 \u0432\u043E\u043B\u044C\u0435\u0440 ").concat(enclosure.biome, ". \u041F\u0440\u0438\u0447\u0438\u043D\u044B: ").concat(cause.join(', '), "."));
        }
    }
    else if (action === "delete") {
        var index = enclosure.animal.findIndex(function (enclosureAnimal) { return enclosureAnimal.id === animal.id; });
        if (index !== -1) {
            enclosure.animal.splice(index, 1);
            enclosure.area += animal.species.requiredAreaPerIndividual;
            console.log("".concat(animal.name, " \u0431\u044B\u043B\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0432\u043E\u043B\u044C\u0435\u0440\u0430"));
        }
    }
    console.log({ result4: enclosure.animal });
};
//const result1 = settleOrRemoveAnimalFromTheEnclosure(individualAnimals[0], enclosures[0], "settle");
function amountOfFoodAllAvailableAnimalsInAllAnclosures(enclosures) {
    return enclosures.reduce(function (totalFood, enclosure) {
        var dailyFoodConsumption = enclosure.animal.reduce(function (summ, animal) { return summ + animal.dailyFoodConsumption; }, 0);
        var resulr = totalFood + dailyFoodConsumption;
        return resulr;
    }, 0);
}
//settleOrRemoveAnimalFromTheEnclosure(individualAnimals[0], enclosures[4], "settle");
//const result3 = amountOfFoodAllAvailableAnimalsInAllAnclosures(enclosures);
//console.log({ result3 });
var cardAnimal = document.querySelector('.container-animal');
for (var _i = 0, individualAnimals_1 = individualAnimals; _i < individualAnimals_1.length; _i++) {
    var animal = individualAnimals_1[_i];
    var newDiv = document.createElement('div');
    cardAnimal === null || cardAnimal === void 0 ? void 0 : cardAnimal.appendChild(newDiv);
    newDiv.innerHTML = "\n    <div class=\"animal-card\">\n      <img class=\"photo-animal\" src=\"".concat(animal.photo, "\"/>\n      <div class=\"name\">").concat(animal.name, "</div>\n     <div class=\"species\">").concat(animal.species.name, "</div>\n    </div>");
}
var enclosuresZoo = document.querySelector('.container-zoo');
for (var _a = 0, enclosures_1 = enclosures; _a < enclosures_1.length; _a++) {
    var enclosure = enclosures_1[_a];
    var newDiv = document.createElement('div');
    enclosuresZoo === null || enclosuresZoo === void 0 ? void 0 : enclosuresZoo.appendChild(newDiv);
    newDiv.innerHTML = "\n  <div class=\"enclosure\">\n     <div class=\"biome\"> ".concat(enclosure.biome, "</div>\n     <div class=\"waterSource\">").concat(enclosure.waterSource, "</div>\n  </div>");
}
