let crystals = document.getElementById("crystalDisplay")
let income = document.getElementById("passiveIncome")
const astroid = document.getElementById("astroid")
let upgradeCost1 = document.getElementById("cost1")
let upgradeCost2 = document.getElementById("cost2")
let upgradeCost3 = document.getElementById("cost3")
let upgradeCost4 = document.getElementById("cost4")
let upgradeCost5 = document.getElementById("cost5")
const upgradebtn1 = document.getElementById("upgradeBtn1")
const upgradebtn2 = document.getElementById("upgradeBtn2")
const upgradebtn3 = document.getElementById("upgradeBtn3")
const upgradebtn4 = document.getElementById("upgradeBtn4")
const upgradebtn5 = document.getElementById("upgradeBtn5")
let crystalCount = 0
let passiveIncome = 0
let perClick = 250
let cost1 = 50
let cost2 = 250
let cost3 = 750
let cost4 = 2000
let cost5 = 10000

astroid.addEventListener("click", () => {
    crystalCount += perClick
    crystals.innerHTML = "Crystals: " + crystalCount
})


upgradebtn1.addEventListener("click", () => {
    if (crystalCount >= cost1) {
        crystalCount -= cost1
        perClick += 1
        crystals.innerHTML = "Crystals: " + crystalCount
    }
})

upgradebtn2.addEventListener("click", () => {
    if (crystalCount >= cost2) {
        crystalCount -= cost2
        crystals.innerHTML = "Crystals: " + crystalCount
        passiveIncome += 1
        setInterval(() => {
            crystalCount += 1
            crystals.innerHTML = "Crystals: " + crystalCount
            income.innerHTML = "Passive/sec: " + passiveIncome
        },1000)
    }
})