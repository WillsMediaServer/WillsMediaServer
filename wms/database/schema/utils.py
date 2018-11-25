from graphql_relay.node.node import from_global_id

def input_to_dictionary(input):
    dictionary = {}
    
    for key in input:
        if key[-2:] == 'id':
            input[key] = from_global_id(input[key])[1]
        dictionary[key] = input[key]
    
    return dictionary
