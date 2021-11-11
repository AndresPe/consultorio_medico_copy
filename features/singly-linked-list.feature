Feature: Singly Linked List

  Scenario: Instancing a list
    Given no instance
    When instancing a new Singly Linked List
    Then initial head must be null
    And initial tail must be null
    And length must be 0

  Scenario: Pushing a value on a empty list
    Given an Empty Singly Linked List with 0 nodes
    When pushing 'First Node' as node value
    Then head value becomes 'First Node'
    And tail value becomes 'First Node'
    And the list length becomes 1

  Scenario: Pushing values on a list with a single node
    Given a Singly Linked List with a single node as 'First Node' as value
    When pushing the following values
    | NodeValue   |
    | Second Node |
    | Third Node  |
    Then list length gets incremented to 3
    And tail value becomes 'Third Node'
    But head value still equals to 'First Node'
