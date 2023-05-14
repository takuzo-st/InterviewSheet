import List "mo:base/List";
import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor Dkeeper {

  public type CheckItem = {
    number : Nat;
    diseaseName : Text;
    statuses : {
      currentTreatment : Bool;
      followUp : Bool;
      previousDisease : Bool;
    };
    age : Text;
  };

  stable var checkItems : List.List<CheckItem> = List.nil<CheckItem>();

  let item1 : CheckItem = {
    number = 0;
    diseaseName = "高血圧";
    statuses = {
      currentTreatment = true;
      followUp = false;
      previousDisease = false;
    };
    age = "24";
  };

  let item2 : CheckItem = {
    number = 1;
    diseaseName = "脂質異常症";
    statuses = {
      currentTreatment = false;
      followUp = false;
      previousDisease = false;
    };
    age = "";
  };

  let item3 : CheckItem = {
    number = 2;
    diseaseName = "糖尿病";
    statuses = {
      currentTreatment = false;
      followUp = false;
      previousDisease = false;
    };
    age = "";
  };

  checkItems := List.push(item3, checkItems);
  checkItems := List.push(item2, checkItems);
  checkItems := List.push(item1, checkItems);

  public func createCheckItem(
    numNat : Nat,
    diseaseNameText : Text,
    statusList : {
      currentTreatment : Bool;
      followUp : Bool;
      previousDisease : Bool;
    },
    ageText : Text,
  ) {

    let newCheckItem : CheckItem = {
      number = numNat;
      diseaseName = diseaseNameText;
      statuses = statusList;
      age = ageText;

    };

    let updatedCheckItems = updateListElement(numNat, newCheckItem, checkItems);
    checkItems := updatedCheckItems;
    Debug.print(debug_show (checkItems));
  };

  public query func readCheckItem() : async [CheckItem] {
    return List.toArray(checkItems);

  };

  private func updateListElement<T>(index : Nat, element : T, list : List.List<T>) : List.List<T> {
    let prefix = List.take(list, index);
    let suffix = List.drop(list, index + 1);
    return List.append(prefix, List.push(element, suffix));
  };
};
