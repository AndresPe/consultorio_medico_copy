const { loadFeature, defineFeature } = require('jest-cucumber');
const { SinglyLinkedList } = require('SinglyLinkedList');

const feature = loadFeature('../singly-linked-list.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
    test('Instancing a list', ({ given, when, then, and }) => {

        let list;

        given('no instance', () => {
            expect(list).toBeUndefined;
        });

        when('instancing a new Singly Linked List', () => {
            list = new SinglyLinkedList();
        });

        then('initial head must be null', () => {
            expect(list.head).toBe(null);
        });
        and('initial tail must be null', () => {
            expect(list.tail).toBe(null);
        });
        and('length must be 0', () => {
            expect(list.length).toBe(0);
        });
    });

    test('Pushing values on a list with a single node', ({ given, when, then, and, but }) => {

        let list;

        given(/^a Singly Linked List with a single node as '(.*)' as value$/, (arg0) => {
            list = new SinglyLinkedList();
            list.push(arg0);

            expect(list.length).toBe(1);
        });

        when('pushing the following values', (table) => {
            table.forEach((row) => {
                list.push(row.NodeValue);
            });
        });

        then(/^list length gets incremented to (.*)$/, (arg0) => {
            expect(list.length).toBe(Number.parseInt(arg0));
        });
        // Utilizo Regex para determinar qué valor será pasado a través de arg0
        and(/^tail value becomes '(.*)'$/, (arg0) => {
            expect(list.tail.value).toBe(arg0);
        });
        // Utilizo Regex para determinar qué valor será pasado a través de arg0
        but(/^head value still equals to '(.*)'$/, (arg0) => {
            expect(list.head.value).toBe(arg0);
        });
    });
});