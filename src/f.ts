import { entityDto, mapDto, objectDto, userDto } from "./model"
import { postDto } from "./model/post.dto"

export const f_user: userDto[] = [
    { "name": "XenonBladeXenonBlade", "id": 1, "ava": "https://i.pinimg.com/736x/0a/e2/36/0ae2368632a7bb66e25d49db5e700bff.jpg", email: 'zxc' },
    { "name": "NeoSparkz XenonBlade", "id": 2, "ava": "https://i.pinimg.com/736x/59/8b/c7/598bc7553799c807d30f61d7c08cd011.jpg", "email": 'zxczxc' },
    { "name": "CypherGhost", "id": 3, "ava": "https://i.pinimg.com/1200x/03/68/17/0368175a962d9d47cc0e03e4ce051c69.jpg", "email": 'zxczxc' },
    { "name": "ViperPulse", "id": 4, "ava": "https://i.pinimg.com/originals/9a/f9/f1/9af9f10ecfe85c8435f19a085c1f23b6.jpg", "email": 'zxczxc' },
    { "name": "ApexNova", "id": 5, "ava": "https://i.pinimg.com/1200x/a2/15/81/a2158151d37997ddf9d9b40dbca71d35.jpg", "email": 'zxczxc' },
    { "name": "ShadowKnight99", "id": 6, "ava": "https://i.pinimg.com/736x/79/18/64/791864dc2f37c2da9e72572e9e5d491f.jpg", "email": 'zxczxc' },
    { "name": "SoulStormer", "id": 7, "ava": "https://i.pinimg.com/1200x/22/3e/a5/223ea5d407893d2d062eb976170cb476.jpg", "email": 'zxczxc' },
    { "name": "LunarStrike", "id": 8, "ava": "https://i.pinimg.com/736x/6a/69/29/6a69293f518dd0b2e668620a75dac4e5.jpg", "email": 'zxczxc' },
    { "name": "ZodiacBlaze", "id": 9, "ava": "https://i.pinimg.com/736x/2c/25/c7/2c25c7cecd9012648055b47cb0977e27.jpg", "email": 'zxczxc' },
    { "name": "FrostByte", "id": 10, "ava": "https://i.pinimg.com/736x/b6/70/3b/b6703bb50bece02cf26818dca318c4f2.jpg", "email": 'zxczxc' },
]

export const f_post: postDto[] = [
    {
        "title": "Как развивается d&d сообщество",
        "likes": 12,
        "description": "Анализ роста и изменений в сообществе любителей Dungeons & Dragons. Анализ роста и изменений в сообществе любителей Dungeons & Dragons. Анализ роста и изменений в сообществе любителей Dungeons & Dragons.",
        "user": { name: "DM_Master", id: 1, ava: '' },
        "tags": "D&D, игры, развитие",
        "department": 'D&D',
    },
    {
        "title": "Лучшие советы начинающим игрокам D&D Лучшие советы начинающим игрокам D&D Лучшие советы начинающим игрокам D&D",
        "description": "Советы новичкам, которые хотят окунуться в мир настольных ролевых игр.",
        "likes": 52,
        "user": { name: "RollerGirl", id: 1, ava: '' },
        "tags": "D&D, советы, начало",
        "department": 'D&D',
    },
    {
        "title": "Создание незабываемого персонажа",
        "description": "Полезные рекомендации по созданию уникальных героев для вашей кампании.",
        "likes": 52,
        "user": { name: "CharacterCreator", id: 1, ava: '' },
        "tags": "D&D, персонажи, креатив",
        "department": 'D&D',
    },
    {
        "title": "Что нового в мире Dungeons & Dragons?",
        "description": "Обзор последних обновлений и дополнений к любимой игре.",
        "likes": 52,
        "user": { name: "RulesExpert", id: 1, ava: '' },
        "tags": "D&D, обновления, новинки",
        "department": 'D&D',
    },
    {
        "title": "Где проходят лучшие игровые сессии?",
        "description": "Рассказываем о местах, где можно поиграть в D&D офлайн и онлайн.",
        "likes": 52,
        "user": { name: "SessionGuide", id: 1, ava: '' },
        "tags": "D&D, сообщества, мероприятия",
        "department": 'D&D',
    },
    {
        "title": "Топ-5 самых интересных приключений в D&D",
        "description": "Подборка захватывающих сюжетов для вашего следующего приключения.",
        "likes": 52,
        "user": { name: "AdventureSeeker", id: 1, ava: '' },
        "tags": "D&D, приключения, топ",
        "department": 'D&D',
    },
    {
        "title": "Особенности русской школы мастера подземелий",
        "description": "Особенности российского подхода к проведению кампаний в D&D.",
        "likes": 52,
        "user": { name: "RussianDM", id: 1, ava: '' },
        "tags": "D&D, Россия, мастера",
        "department": 'D&D',
    },
    {
        "title": "Самые необычные расы и классы в D&D",
        "description": "Узнайте больше о нестандартных расах и классах в популярной ролевой игре.",
        "likes": 52,
        "user": { name: "RaceExplorer", id: 1, ava: '' },
        "tags": "D&D, расы, классы",
        "department": 'D&D',
    },
    {
        "title": "Какие бонусы получают игроки за взаимодействие?",
        "description": "Преимущества активного участия игроков в игровом процессе.",
        "likes": 52,
        "user": { name: "InteractionPro", id: 1, ava: '' },
        "tags": "D&D, участие, бонус",
        "department": 'D&D',
    },
    {
        "title": "История развития Dungeons & Dragons",
        "description": "Краткий экскурс в историю самой известной ролевой игры мира.",
        "likes": 52,
        "user": { name: "HistoryBuff", id: 1, ava: '' },
        "tags": "D&D, история, эволюция",
        "department": 'D&D',
    },
    {
        "title": "Стратегии победы над драконами",
        "description": "Как победить грозных драконов в ваших приключениях.",
        "likes": 52,
        "user": { name: "DragonSlayer", id: 1, ava: '' },
        "tags": "D&D, стратегии, драконы",
        "department": 'D&D',
    },
    {
        "title": "Как провести незабываемое сражение?",
        "description": "Практические советы для мастеров игры по организации захватывающих боев.",
        "likes": 52,
        "user": { name: "BattleMaster", id: 1, ava: '' },
        "tags": "D&D, сражения, организация",
        "department": 'D&D',
    },
    {
        "title": "Совместимы ли разные издания D&D?",
        "description": "Можно ли совмещать правила разных изданий в одной игровой сессии?",
        "likes": 52,
        "user": { name: "EditionMixologist", id: 1, ava: '' },
        "tags": "D&D, совместимость, правила",
        "department": 'D&D',
    },
    {
        "title": "Адаптация классики для современной аудитории",
        "description": "Как адаптируются старые сценарии под современное поколение игроков.",
        "likes": 52,
        "user": { name: "ClassicAdaptor", id: 1, ava: '' },
        "tags": "D&D, классика, адаптация",
        "department": 'D&D',
    },
    {
        "title": "Основные механики взаимодействия персонажей",
        "description": "Разбираем основные способы взаимодействия персонажей друг с другом.",
        "likes": 52,
        "user": { name: "Interacter", id: 1, ava: '' },
        "tags": "D&D, механика, взаимодействие",
        "department": 'D&D',
    },
    {
        "title": "Реальные истории из сессий D&D",
        "description": "Игроки рассказывают забавные случаи из реальных игр.",
        "likes": 52,
        "user": { name: "Storyteller", id: 1, ava: '' },
        "tags": "D&D, реальные, орииопыт",
        "department": 'D&D',
    },
    {
        "title": "За кулисами создания собственных миров",
        "description": "Процесс разработки новых фэнтезийных вселенных для D&D.",
        "likes": 52,
        "user": { name: "WorldBuilder", id: 1, ava: '' },
        "tags": "D&D, создание, овфантазия",
        "department": 'D&D',
    },
    {
        "title": "Учимся рисовать карты для кампаний",
        "description": "Простые шаги для рисования увлекательных карт в стиле D&D.",
        "likes": 52,
        "user": { name: "MapMaker", id: 1, ava: '' },
        "tags": "D&D, карты, рисование",
        "department": 'D&D',
    },
    {
        "title": "Лучшие аксессуары для D&D-игроков",
        "description": "Полезные вещи, которые сделают ваши игровые вечера комфортнее.",
        "likes": 52,
        "user": { name: "GearCollector", id: 1, ava: '' },
        "tags": "D&D, аксессуары, полезности",
        "department": 'D&D',
    },
    {
        "title": "Зачем нужны побочные квесты?",
        "description": "Как дополнительные задания обогащают игру и развивают персонажей.",
        "likes": 52,
        "user": { name: "QuestDesigner", id: 1, ava: '' },
        "tags": "D&D, квесты, развитие",
        "department": 'D&D',
    },
    {
        "title": "Правильное использование заклинаний",
        "description": "Основы магии и грамотное применение магических способностей.",
        "likes": 52,
        "user": { name: "SpellCaster", id: 1, ava: '' },
        "tags": "D&D, магия, заклинания",
        "department": 'D&D',
    }
]

export const f_tag: string[] = ["dnd", "фентези", "zxccursed", "разработка", "web"]

export const f_map: mapDto[] = [
    {
        "id": 1,
        "name": "Таверна у Магнуса",
        "path": "/img/f/map1.jpg",
        "source": { "id": 1, "name": "Таверны" }
    },
    {
        "id": 2,
        "name": "Подземелье Алдуина",
        "path": "/img/f/map2.jpg",
        "source": { "id": 1, "name": "Подземелья" }
    },
    {
        "id": 3,
        "name": "Чертог Замка",
        "path": "/img/f/map3.jpg",
        "source": { "id": 1, "name": "Замок" }
    },
    {
        "id": 4,
        "name": "Комната",
        "path": "/img/f/map4.jpg",
        "source": { "id": 1, "name": "Комнаты" }
    },
    {
        "id": 5,
        "name": "Чащя",
        "path": "/img/f/map5.jpg",
        "source": { "id": 1, "name": "Природа" }
    },
    {
        "id": 6,
        "name": "Лесная тропа",
        "path": "/img/f/map6.jpg",
        "source": { "id": 2, "name": "Природа" }
    },
    {
        "id": 7,
        "name": "Городская площадь",
        "path": "/img/f/map7.jpg",
        "source": { "id": 3, "name": "Город" }
    },
    {
        "id": 8,
        "name": "Пустыня",
        "path": "/img/f/map8.jpg",
        "source": { "id": 4, "name": "Природа" }
    },
    {
        "id": 9,
        "name": "Горная вершина",
        "path": "/img/f/map9.jpg",
        "source": { "id": 5, "name": "Природа" }
    },
    {
        "id": 10,
        "name": "Заброшенная фабрика",
        "path": "/img/f/map10.jpg",
        "source": { "id": 6, "name": "Город" }
    },
    {
        "id": 11,
        "name": "Речной берег",
        "path": "/img/f/map11.jpg",
        "source": { "id": 7, "name": "Природа" }
    },
    {
        "id": 12,
        "name": "Ледяной пещерный зал",
        "path": "/img/f/map12.jpg",
        "source": { "id": 8, "name": "Подземелья" }
    },
    {
        "id": 13,
        "name": "Заброшенная деревня",
        "path": "/img/f/map13.jpg",
        "source": { "id": 9, "name": "Деревни" }
    },
    {
        "id": 14,
        "name": "Магическая лаборатория",
        "path": "/img/f/map14.jpg",
        "source": { "id": 10, "name": "Подземелья" }
    },
    {
        "id": 15,
        "name": "Крепость",
        "path": "/img/f/map15.jpg",
        "source": { "id": 11, "name": "Замок" }
    },
    {
        "id": 16,
        "name": "Пляж",
        "path": "/img/f/map16.jpg",
        "source": { "id": 12, "name": "Природа" }
    },
    {
        "id": 17,
        "name": "Заснеженная равнина",
        "path": "/img/f/map17.jpg",
        "source": { "id": 13, "name": "Природа" }
    },
    {
        "id": 18,
        "name": "Древний храм",
        "path": "/img/f/map18.jpg",
        "source": { "id": 14, "name": "Замок" }
    },
    {
        "id": 19,
        "name": "Карта звездного неба",
        "path": "/img/f/map19.jpg",
        "source": { "id": 15, "name": "Природа" }
    },
    {
        "id": 20,
        "name": "Тропический остров",
        "path": "/img/f/map20.jpg",
        "source": { "id": 16, "name": "Природа" }
    }
]

export const f_object: objectDto[] = [
    {
        id: 1,
        name: 'Гоблин',
        path: '/img/f/object1.jpg',
        source: { id: 1, name: 'Мелкие твари' },
    },
    {
        id: 2,
        name: 'Гремлин',
        path: '/img/f/object2.jpg',
        source: { id: 1, name: 'Мелкие твари' },
    },
    {
        id: 3,
        name: 'Громовой дракон',
        path: '/img/f/object3.jpg',
        source: { id: 1, name: 'Драконы' },
    },
    {
        id: 4,
        name: 'Огненый дракон',
        path: '/img/f/object4.jpg',
        source: { id: 1, name: 'Драконы' },
    },
    {
        id: 5,
        name: 'Стражник',
        path: '/img/f/object5.jpg',
        source: { id: 1, name: 'Стражна' },
    }
]

export const f_entity: entityDto[] = [
    {
        id: 1,
        name: 'Гоблин',
        path: '/img/f/entity1.jpg',
        source: { id: 1, name: 'Мелкие твари' },
        description: 'Маленькое злое существо, часто встречающееся в подземельях.',
        initiative: 130,
        size: 70,
        status: 'live'
    },
    {
        id: 2,
        name: 'Гремлин',
        path: '/img/f/entity2.jpg',
        source: { id: 1, name: 'Мелкие твари' },
        description: 'Маленькое вредное существо, известное своим коварством.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 3,
        name: 'Громовой дракон',
        path: '/img/f/entity3.jpg',
        source: { id: 1, name: 'Драконы' },
        description: 'Могучий дракон, умеющий вызывать грозы и молнии.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 4,
        name: 'Огненный дракон',
        path: '/img/f/entity4.jpg',
        source: { id: 1, name: 'Драконы' },
        description: 'Дракон, способный извергать пламя изо рта.',
        initiative: 5,
        size: 70,
        status: 'live'
    },
    {
        id: 5,
        name: 'Стражник',
        path: '/img/f/entity5.jpg',
        source: { id: 1, name: 'Люди' },
        description: 'Защитник или охранник, охраняющий важные объекты.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 6,
        name: 'Тролль',
        path: '/img/f/entity6.jpg',
        source: { id: 2, name: 'Мелкие твари' },
        description: 'Грубое существо, живущее в горах или лесах.',
        initiative: 52,
        size: 70,
        status: 'live'
    },
    {
        id: 7,
        name: 'Волшебник',
        path: '/img/f/entity7.jpg',
        source: { id: 3, name: 'Люди' },
        description: 'Мастер магии, владеющий силой заклинаний.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 8,
        name: 'Ведьма',
        path: '/img/f/entity8.jpg',
        source: { id: 3, name: 'Люди' },
        description: 'Знахарка или магиня, использующая магию для своих целей.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 10,
        name: 'Орк',
        path: '/img/f/entity10.jpg',
        source: { id: 2, name: 'Мелкие твари' },
        description: 'Суровое воинственное существо, обычно враждебное людям.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 11,
        name: 'Эльф',
        path: '/img/f/entity11.jpg',
        source: { id: 5, name: 'Люди' },
        description: 'Лесное существо, известное своей грацией и магическими способностями.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 12,
        name: 'Гном',
        path: '/img/f/entity12.jpg',
        source: { id: 5, name: 'Люди' },
        description: 'Маленькое, но искусное в кузнечном деле существо.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 13,
        name: 'Демон',
        path: '/img/f/entity13.jpg',
        source: { id: 6, name: 'Темные существа' },
        description: 'Зловещее существо, связанное с тьмой и магией зла.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 15,
        name: 'Медведь',
        path: '/img/f/entity15.jpg',
        source: { id: 8, name: 'Животные' },
        description: 'Большое хищное животное, обитающее в лесах.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 16,
        name: 'Змей',
        path: '/img/f/entity16.jpg',
        source: { id: 8, name: 'Животные' },
        description: 'Длинное пресмыкающееся существо, часто ядовитое.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 17,
        name: 'Летучая мышь',
        path: '/img/f/entity17.jpg',
        source: { id: 8, name: 'Животные' },
        description: 'Небольшое ночное существо, летающее в тёмных местах.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 18,
        name: 'Русалка',
        path: '/img/f/entity18.jpg',
        source: { id: 9, name: 'Морские существа' },
        description: 'Морское существо с верхней частью человека и хвостом рыбы.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 19,
        name: 'Кракен',
        path: '/img/f/entity19.jpg',
        source: { id: 9, name: 'Морские существа' },
        description: 'Гигантское морское существо, способное разрушать корабли.',
        initiative: 30,
        size: 70,
        status: 'live'
    },
    {
        id: 20,
        name: 'Дракон',
        path: '/img/f/entity20.jpg',
        source: { id: 1, name: 'Драконы' },
        description: 'Величественное существо, владеющее магией и силой.',
        initiative: 30,
        size: 70,
        status: 'live'
    }
]