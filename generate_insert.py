#!/usr/bin/python

import itertools
import random

def generate_SQL_insert(file_name, gender, country_code, attributes):
	""" (str, str, str, list of str) -> NoneType

	Create a file of SQL Insert statements for each name in the given list,
	for a specific gender and country. For each name assign 3 attributes
	so that they are evenly distributed among names. 
	"""

	input_file = open(file_name, 'r')
	output_file = open('FILL.sql', 'w')

	names = input_file.readlines()
	attributes_combos = list(itertools.combinations(attributes, 3))
	attributes_combos = ["".join(a) for a in attributes_combos]
	
	i = 0

	for name in names:
		if i == len(attributes_combos):
			i = 0
		output_file.write("INSERT INTO Names (name, gender, country, attributes) VALUES (\'{0}\', \'{1}\', \'{2}\', \'{3}\');\n".format(name.strip(), gender, country_code, attributes_combos[i]))
		i += 1
 
	input_file.close()
	output_file.close()


def create_bio(name, attributes):
	""" (str, str) -> str

	Create a bio using the chosen name and attributes.
	"""
	
	attribute_names = {'O': 'outgoing', 'A': 'adventerous', 'B': 'bold', 'S': 'shy', 'T': 'tough', 'L': 'likeable', 'C': 'creative', 'F': 'funny'}

	attribute_sentences = {'O': ['likes to go out', 'likes having fun', 'likes being spontaneous'], 
	'A': ['isn\'t afraid to get their hands dirty', 'is always interested in a little adventure', 'can build a fire just with the friction of their bare hands'], 
	'B': ['are not afraid to speak their mind', 'always tell people what they really think', 'takes chances'], 
	'S': ['are more introverted', 'like to do things on their own', 'are a lone wolf'], 
	'T': ['don\'t get scared easily', 'are muscular', 'look intimidating'], 
	'L': ['are well liked', 'have a lot of friends', 'are very socialble'], 
	'C': ['likes building', 'likes making things', 'likes being artistic'], 
	'F': ['is always joking around', 'is the class clown', 'likes telling jokes']}

	attributes_list = list(attributes)

	bio = '{0} is a name usually associated with people who {1} and {2}. {0}\'s usually {3}.\n'.format(
		name, 
		random.choice(attribute_sentences[attributes_list[0]]), 
		random.choice(attribute_sentences[attributes_list[1]]),  
		random.choice(attribute_sentences[attributes_list[2]]))

	return bio

if __name__=="__main__":
	generate_SQL_insert('fill_names.txt', 'M', 'NA', ['O', 'A', 'B', 'S', 'T', 'L', 'C', 'F'])
	print(create_bio('Axel', 'ABC'))



