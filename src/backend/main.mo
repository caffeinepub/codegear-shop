import Map "mo:core/Map";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type Hobby = {
    id : Nat;
    name : Text;
    createdAt : Time.Time;
  };

  module Hobby {
    public func compareByCreatedAt(hobby1 : Hobby, hobby2 : Hobby) : Order.Order {
      Int.compare(hobby1.createdAt, hobby2.createdAt);
    };
  };

  var nextId = 0;
  let hobbies = Map.empty<Nat, Hobby>();

  public shared ({ caller }) func addHobby(name : Text) : async Nat {
    let id = nextId;
    let hobby : Hobby = {
      id;
      name;
      createdAt = Time.now();
    };
    hobbies.add(id, hobby);
    nextId += 1;
    id;
  };

  public shared ({ caller }) func removeHobby(id : Nat) : async Bool {
    if (not hobbies.containsKey(id)) { Runtime.trap("Hobby does not exist") };
    hobbies.remove(id);
    true;
  };

  public query ({ caller }) func getHobbies() : async [Hobby] {
    hobbies.values().toArray().sort(Hobby.compareByCreatedAt);
  };
};
