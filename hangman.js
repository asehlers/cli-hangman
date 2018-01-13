var word = require("./word.js");

function Game(){
	console.log("Game Created");
	this.guesses = 8;
	this.wordToGuess = new word.Word();
	this.wordBank = ["adventurer", "abandoned mine", "action", "advance", "advisor", "alchemist", "alms", "altar", "ambassador", "amulet", "annex", "apothecary", "apprentice", "aqueduct", "archive", "arena", "armory", "artificer", "artisan", "avanto", "bad omens", "bag of gold", "baker", "ball", "band of misfits", "bandit", "bandit camp", "bandit fort", "bank", "banquet", "bard", "baron", "basilica", "bat", "baths", "battlefield", "bazaar", "beggar", "bishop", "black market", "blessed village", "bonfire", "boon", "border village", "borrow", "bridge", "bridge troll", "bureaucrat", "bustling village", "butcher", "cache", "candlestick maker", "capital", "caravan", "caravan guard", "cartographer", "castles", "castles", "catacombs", "catapult", "cellar", "cemetery", "champion", "chancellor", "changeling", "chapel", "chariot race", "charm", "city", "city quarter", "cobbler", "coin of the realm", "colonnade", "colony", "conclave", "conquest", "conspirator", "contraband", "coppersmith", "council room", "count", "counterfeit", "counting house", "courtier", "courtyard", "crossroads", "crown", "crumbling castle", "crypt", "cultist", "cursed gold", "cursed village", "cutpurse", "death cart", "defiled shrine", "deluded", "delusion", "delve", "den of sin", "develop", "diadem", "diplomat", "disciple", "dismantle", "distant lands", "doctor", "dominate", "donate", "druid", "duchess", "duke", "dungeon", "duplicate", "embargo", "embassy", "empires landmarks", "emporium", "encampment", "enchantress", "engineer", "envious", "envoy", "envy", "exorcist", "expand", "expedition", "explorer", "fairgrounds", "faithful hound", "familiar", "famine", "farming village", "farmland", "fear", "feast", "feodum", "ferry", "festival", "fishing village", "followers", "fool", "forager", "forge", "fortress", "fortune", "fortune teller", "forum", "fountain", "fugitive", "gardens", "gear", "ghost", "ghost ship", "ghost town", "giant", "gladiator", "goat", "golem", "goons", "governor", "grand castle", "grand market", "graverobber", "great hall", "greed", "groundskeepr", "guardian", "guide", "haggler", "hamlet", "harbinger", "harem", "harvest", "haunted castle", "haunted mirror", "haunted woods", "haunting", "haven", "herald", "herbalist", "hermit", "hero", "highway", "hireling", "hoard", "horn of plenty", "horse traders", "hovel", "humble castle", "hunting grounds", "hunting party", "idol", "imp", "imp", "inheritance", "inn", "ironmonger", "ironworks", "island", "jack of all trades", "jester", "journeyman", "junk dealer", "keep", "laboratory", "labyrinth", "legionary", "leprechaun", "library", "lighthouse", "loan", "locusts", "lookout", "lost arts", "lost city", "lost in the woods", "lucky coin", "lurker", "madman", "magic lamp", "magpie", "mandarin", "marauder", "margrave", "market", "market square", "masquerade", "masterpiece", "menagerie", "mercenary", "merchant", "merchant guild", "merchant ship", "messenger", "militia", "mill", "mine", "mining village", "minion", "mint", "miser", "miserable", "misery", "mission", "moat", "monastery", "moneylender", "monument", "mountain pass", "mountebank", "musuem", "mystic", "native village", "navigator", "necromancer", "necropolis", "night", "night watchman", "noble brigand", "nobles", "nomad camp", "oasis", "obelisk", "opulent castle", "oracle", "orchard", "outpost", "overgrown estate", "overlord", "page", "palace", "pasture", "pathfinding", "patrician", "patrol", "pawn", "pearl diver", "peasant", "peddler", "pilgrimage", "pillage", "pirate ship", "pixie", "plague", "plan", "platinum", "plaza", "plunder", "poacher", "pooka", "poor house", "port", "possession", "potion", "pouch", "poverty", "prince", "princess", "procession", "quarry", "quest", "rabble", "raid", "raider", "ranger", "ratcatcher", "rats", "raze", "rebuild", "relic", "remake", "remodel", "replace", "ritual", "rocks", "rogue", "royal blacksmith", "royal carriage", "royal seal", "ruined library", "ruined market", "ruined village", "saboteur", "sacred grove", "sacrifice", "sage", "salt the earth", "salvager", "sauna", "save", "scavenger", "scheme", "scout", "scouting party", "scrying pool", "sea hag", "seaway", "secret cave", "secret chamber", "secret passage", "sentry", "settlers", "shanty town", "shepherd", "silk road", "skulk", "small castle", "smithy", "smugglers", "soldier", "soothsayer", "spice merchant", "spoils", "sprawling castle", "spy", "squire", "stables", "stash", "steward", "stonemason", "storeroom", "storyteller", "summon", "survivors", "swamp hag", "swindler", "tactician", "talisman", "tax", "taxman", "teacher", "temple", "thief", "throne room", "tomb", "tormentor", "torturer", "tournament", "tower", "tracker", "trade", "trade route", "trader", "trading post", "tragic hero", "training", "transmogrify", "transmute", "travelling fair", "treasure hunter", "treasure map", "treasure trove", "treasury", "tribute", "triumph", "triumphal arch", "trusty steed", "tunnel", "twice miserable", "university", "upgrade", "urchin", "vagrant", "vampire", "vassal", "vault", "venture", "villa", "village", "vineyard", "wall", "walled village", "wandering minstrel", "war", "warehouse", "warrior", "watchtower", "wedding", "werewolf", "wharf", "wild hunt", "windfall", "wine merchant", "wish", "wishing well", "witch", "wolf den", "woodcutter", "workshop", "young witch", "zombie apprentice", "zombie mason", "zombie spy"];
	this.wordToGuess.generateWord("Default");
	this.lettersGuessed = [];
}

Game.prototype.makeGuess = function(guess){
	// console.log("Game making guess");
	if(this.lettersGuessed.indexOf(guess.toLowerCase()) < 0){
		this.lettersGuessed.push(guess.toLowerCase());
		if(!this.wordToGuess.guessLetter(guess)){
			this.guesses--;
		}
		// console.log(this.wordToGuess.getOutput());
	}else{
		console.log("Please enter a guess you haven't used");
	}
}

Game.prototype.gameWon = function(){
	// console.log("checking game won");
	if(this.wordToGuess.wordGuessed()){
		console.log(this.wordToGuess.getOutput());
		console.log("Game Won!");
		return true;
	}else{
		return false;
	}
}

Game.prototype.continueGame = function(){
	// console.log("checking continue game");
	if(this.guesses <= 0){
		console.log("Game Over!");
		return false;
	}else if(this.gameWon()){
		return false;
	}else{
		return true;
	}
}


Game.prototype.getRandomWord = function(){
	// console.log("getting random word");
	var index = Math.floor(Math.random() * this.wordBank.length);
	// console.log(this.wordToGuess);
	// console.log(this.wordBank[index]);
	this.wordToGuess.generateWord(this.wordBank[index]);
	// this.wordToGuess.generateWord("Testing's : Symbo7");
}

Game.prototype.newGame = function(){
	// console.log("newGame called");
	this.getRandomWord();
	this.guesses = 8;
	this.lettersGuessed = [];
}

Game.prototype.guessedOutput = function(){
	if(this.lettersGuessed[0] !== undefined){
		var output = this.lettersGuessed[0];
		for(var i = 1; i < this.lettersGuessed.length; i++){
			output += ", " + this.lettersGuessed[i];
		}
		return output;
	}
}

module.exports = {
	Game: Game
}