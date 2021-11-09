Feature: Is it Friday yet?
    Everybody wants to know when it's Friday
    
    Scenario: Monday isn't Friday 
    Given today if Monday
    When I ask whether it´s Friday yet
    Then I should be told "Nope"