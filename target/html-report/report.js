$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Schedule.feature");
formatter.feature({
  "name": "As user I want to be able to see general schedule",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Cucumber: Smoke test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BRIT-4533"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on the sign-in page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignInStepDefinitions.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user logs in as a student with \"jhelkin7u@hao123.com\" and \"stantonmatus\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDefinitions.user_logs_in_as_a_student_with_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to general schedule and verifies subtitle",
  "keyword": "Then "
});
formatter.match({
  "location": "MapStepDefinitions.user_navigates_to_general_schedule_and_verifies_subtitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});