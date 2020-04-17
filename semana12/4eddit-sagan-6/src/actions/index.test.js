import {
    getPostToReducer,
    filterToReducer,
    getPostDetailsToReducer
} from './index'

describe("Buscar valores", () =>{
    test("Get Post", () =>{
        const mockedGetData = {
            "posts": [
              {
                "votesCount": 1,
                "userVoteDirection": 1,
                "commentsCount": 2,
                "id": "XFM8JtoESiWKqCml3Rjz",
                "username": "darvas",
                "text": "Oi gente! Bem vindos ao 4eddit :)"
              }
            ]
          }
       const  mockedGetAction = getPostToReducer(mockedGetData)

        expect(mockedGetAction.type).toEqual("GET_POSTS");
        expect(mockedGetAction.payload.data).toBeDefined();
        expect(mockedGetAction.payload.data).toEqual(mockedGetData);
    })
    test("filterPost Post", () =>{
        const mockedGetData = 'e ele'
        const mockedGetAction = filterToReducer(mockedGetData)

        expect(mockedGetAction.type).toEqual("FILTER");
        expect(mockedGetAction.payload.valueFilter).toBeDefined();
        expect(mockedGetAction.payload.valueFilter).toEqual(mockedGetData);
    })
    test("Get PostDetails", () =>{
        const mockedGetData = 'id'
        const mockedGetAction = getPostDetailsToReducer(mockedGetData)

        expect(mockedGetAction.type).toEqual("POST_DETAILS");
        expect(mockedGetAction.payload.data).toBeDefined();
        expect(mockedGetAction.payload.data).toEqual(mockedGetData);
    })
})