
![Image](https://github.com/levi-holmes/Project1-quarter1-/blob/master/images/Screen%20Shot%202017-06-30%20at%202.01.16%20PM.png)

# Magic The Gathering 4 ME (MTG4ME)

This Applications is a tool to ultimately help build decks for Magic The Gathering. Full completed funtionality will include the following features.

- Search for a card by name
- Search for a card by type
- Search for a card by color
- Search for a card by set
- Search for a card by power and/or toughness

## Narrative

As of June 30th, 2017 only the search bar function is operations  

## Why MTG4ME?
What is the purpose of the project?

```
To enable construction of themed and other type Magic The Gathering (MTG) with optimal efficiency. And most because NOBODY is able to keep current with the overwhelming number of MTG cards that are now out there.
```


## Notes

You can still manually enter query strings into the "search" bar. Including the following query selectors: color, power, toughness, cmc, rarity, and type. Specifics as follows.

- Default search parameter is "?name=" search by name in whole or part.
- color -
		1 color "color=[desired color]"
		2+ colors "color=[desired color]&color=[desired color]"... etc
- cmc - (Combined Mana Cost)

- rarity - 	"common"
						"uncommon"
						"rare"
						"mythic rare"

-	type -		"artifact"
						"land"
						"creature"
						"sorcery"
						"instant"
										etc
- power/toughness -
						"power=[#]&toughness=[#]"
							You can also use the modifiers "gt" and "it"
							
							i.e. "power=[gt#]&toughness=[it#]"
