var word = require("./word.js");

function Game(){
	this.guesses = 8;
	this.wordToGuess = word.Word();
	this.wordBank = ["adventurer", "abandoned mine", "action", "action card, +1 action", "advance", "adventures: events", "advisor", "alchemist", "alms", "altar", "ambassador", "amulet", "annex", "apothecary", "apprentice", "aqueduct", "archive", "arena", "armory", "artificer", "artisan", "avanto", "bad omens", "bag of gold", "baker", "ball", "band of misfits", "bandit", "bandit camp", "bandit fort", "bank", "banquet", "bard", "baron", "basilica", "bat", "baths", "battlefield", "bazaar", "beggar", "bishop", "black market", "blessed village", "bonfire", "boon", "border village", "borrow", "bridge", "bridge troll", "bureaucrat", "bustling village", "butcher", "cache", "candlestick maker", "capital", "caravan", "caravan guard", "cartographer", "castles", "castles", "catacombs", "catapult", "cellar", "cemetery", "champion", "chancellor", "changeling", "chapel", "chariot race", "charm", "city", "city quarter", "cobbler", "coin of the realm", "colonnade", "colony", "conclave", "conquest", "conspirator", "contraband", "coppersmith", "council room", "count", "counterfeit", "counting house", "courtier", "courtyard", "crossroads", "crown", "crumbling castle", "crypt", "cultist", "cursed gold", "cursed village", "cutpurse", "death cart", "defiled shrine", "deluded", "delusion", "delve", "den of sin", "develop", "diadem", "diplomat", "disciple", "dismantle", "distant lands", "doctor", "dominate", "donate", "druid", "duchess", "duke", "dungeon", "duplicate", "embargo", "embassy", "empires landmarks", "emporium", "encampment", "enchantress", "engineer", "envious", "envoy", "envy", "exorcist", "expand", "expedition", "explorer", "fairgrounds", "faithful hound", "familiar", "famine", "farming village", "farmland", "fear", "feast", "feodum", "ferry", "festival", "fishing village", "followers", "fool", "forager", "forge", "fortress", "fortune", "fortune teller", "forum", "fountain", "fugitive", "gardens", "gear", "ghost", "ghost ship", "ghost town", "giant", "gladiator", "goat", "golem", "goons", "governor", "grand castle", "grand market", "graverobber", "great hall", "greed", "groundskeepr", "guardian", "guide", "haggler", "hamlet", "harbinger", "harem", "harvest", "haunted castle", "haunted mirror", "haunted woods", "haunting", "haven", "herald", "herbalist", "hermit", "hero", "highway", "hireling", "hoard", "horn of plenty", "horse traders", "hovel", "humble castle", "hunting grounds", "hunting party", "idol", "imp", "imp", "inheritance", "inn", "ironmonger", "ironworks", "island", "jack of all trades", "jester", "journeyman", "junk dealer", "keep", "laboratory", "labyrinth", "legionary", "leprechaun", "library", "lighthouse", "loan", "locusts", "lookout", "lost arts", "lost city", "lost in the woods", "lucky coin", "lurker", "madman", "magic lamp", "magpie", "mandarin", "marauder", "margrave", "market", "market square", "masquerade", "masterpiece", "menagerie", "mercenary", "merchant", "merchant guild", "merchant ship", "messenger", "militia", "mill", "mine", "mining village", "minion", "mint", "miser", "miserable", "misery", "mission", "moat", "monastery", "moneylender", "monument", "mountain pass", "mountebank", "musuem", "mystic", "native village", "navigator", "necromancer", "necropolis", "night", "night watchman", "noble brigand", "nobles", "nomad camp", "oasis", "obelisk", "opulent castle", "oracle", "orchard", "outpost", "overgrown estate", "overlord", "page", "palace", "pasture", "pathfinding", "patrician", "patrol", "pawn", "pearl diver", "peasant", "peddler", "pilgrimage", "pillage", "pirate ship", "pixie", "plague", "plan", "platinum", "plaza", "plunder", "poacher", "pooka", "poor house", "port", "possession", "potion", "pouch", "poverty", "prince", "princess", "procession", "quarry", "quest", "rabble", "raid", "raider", "ranger", "ratcatcher", "rats", "raze", "rebuild", "relic", "remake", "remodel", "replace", "ritual", "rocks", "rogue", "royal blacksmith", "royal carriage", "royal seal", "ruined library", "ruined market", "ruined village", "saboteur", "sacred grove", "sacrifice", "sage", "salt the earth", "salvager", "sauna", "save", "scavenger", "scheme", "scout", "scouting party", "scrying pool", "sea hag", "seaway", "secret cave", "secret chamber", "secret passage", "sentry", "settlers", "shanty town", "shepherd", "silk road", "skulk", "small castle", "smithy", "smugglers", "soldier", "soothsayer", "spice merchant", "spoils", "sprawling castle", "spy", "squire", "stables", "stash", "steward", "stonemason", "storeroom", "storyteller", "summon", "survivors", "swamp hag", "swindler", "tactician", "talisman", "tax", "taxman", "teacher", "temple", "thief", "throne room", "tomb", "tormentor", "torturer", "tournament", "tower", "tracker", "trade", "trade route", "trader", "trading post", "tragic hero", "training", "transmogrify", "transmute", "travelling fair", "treasure hunter", "treasure map", "treasure trove", "treasury", "tribute", "triumph", "triumphal arch", "trusty steed", "tunnel", "twice miserable", "university", "upgrade", "urchin", "vagrant", "vampire", "vassal", "vault", "venture", "villa", "village", "vineyard", "wall", "walled village", "wandering minstrel", "war", "warehouse", "warrior", "watchtower", "wedding", "werewolf", "wharf", "wild hunt", "windfall", "wine merchant", "wish", "wishing well", "witch", "wolf den", "woodcutter", "workshop", "young witch", "zombie apprentice", "zombie mason", "zombie spy"];
	// this.wordToGuess.generateWord();

}

Game.prototype.makeGuess = function(guess){
	if(!this.wordToGuess.guessLetter(guess)){
		this.guesses--;
	}
	console.log(this.wordToGuess.getOutput());
}

Game.prototype.gameWon = function(){
	if(this.word.wordGuessed()){
		console.log("Game Won!");
		return true;
	}else{
		return false;
	}
}

Game.prototype.continueGame = function(){
	if(this.guesses <== 0){
		console.log("Game Over!");
		return false;
	}else if(this.gameWon()){
		return false;
	}else{
		return true;
	}
}

Game.prototype.newGame = function(){
	this.wordToGuess.generateWord("New Game");
	this.guesses = 8;
}

Game.prototype.getRandomWord = function(){

}

