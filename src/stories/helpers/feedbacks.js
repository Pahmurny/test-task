import faker from 'faker'
import m from 'moment'

export const GenerateFeedbacks = (amount = 10) => {
    const feedbacks = []
    for (let i = 1; i <= amount; i++) {
        feedbacks.push({
            locked: faker.random.boolean(),
            date: faker.date.future(0, new Date()),
            user: {
                name: `${faker.name.firstName(0)} ${faker.name.lastName(0)}`,
                image: faker.image.avatar()
            },
            content:faker.lorem.lines(),
            tags: faker.lorem.words(5).split(' ')
        })
    }

    return feedbacks
}