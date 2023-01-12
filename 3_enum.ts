enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const memberShipReverse = Membership[2]
console.log(membership);
console.log(memberShipReverse);

enum SocialNetwork {
    VK = 'Vkontakte',
    FB = "Facebook",
    Insta = "Instagramm"
}

const social = SocialNetwork.Insta

console.log(social);