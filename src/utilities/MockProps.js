import { v4 as uuidv4 } from 'uuid';

export function getMockProps(){

    const mockTaskList = [
        {id: uuidv4(), title: "Watch that one interesting movie", description: "Watch movie called Interstellar, its very interesting and stuff", date: new Date('December 17, 2017 07:14:36'), status:false},
        {id: uuidv4(), title: "Do the dishes", description: "There are plenty a plates left after a party. Better not to delay the washing up", date: new Date('March 24, 2017 14:31:12'), status:false},
        {id: uuidv4(), title: "Placeholder TODO", description: "I`m an embarrassment. Delete me pls", date: new Date('January 4, 2017 05:51:56'), status:false}
     ]

    return mockTaskList;
}