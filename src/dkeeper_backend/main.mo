import List "mo:base/List";
import Debug "mo:base/Debug";

actor Dkeeper {

  public type CheckItem = {
    name : Text;
    statuses : StatusesTupleText;
    age : Text;
    values : [(Bool, Bool, Bool)];
  };

  type StatusesTupleText = { fst : Text; snd : Text; trd : Text };

  var checkItems : List.List<CheckItem> = List.nil<CheckItem>();

  public func createCheckItem(nameText : Text, statuesTupleText : StatusesTupleText, ageText : Text, valuesList : [(Bool, Bool, Bool)]) {

    let newCheckItem : CheckItem = {
      name = nameText;
      statuses = statuesTupleText;
      age = ageText;
      values = valuesList

    };
    checkItems := List.push(newCheckItem, checkItems);
    Debug.print(debug_show (checkItems));
  };
};
