var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var memberShipReverse = Membership[2];
console.log(membership);
console.log(memberShipReverse);
var SocialNetwork;
(function (SocialNetwork) {
    SocialNetwork["VK"] = "Vkontakte";
    SocialNetwork["FB"] = "Facebook";
    SocialNetwork["Insta"] = "Instagramm";
})(SocialNetwork || (SocialNetwork = {}));
var social = SocialNetwork.Insta;
console.log(social);
