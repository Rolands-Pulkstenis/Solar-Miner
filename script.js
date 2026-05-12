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
let base = 0
let droneDmg = 0
let incomeMultiplier = 1

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
        // Add passive income scaled by current income multiplier
        passiveIncome += 1 * incomeMultiplier
        crystals.innerHTML = "Crystals: " + crystalCount
        income.innerHTML = "Passive/sec: " + passiveIncome
    }
})

upgradebtn3.addEventListener("click", () => {
    if (crystalCount >= cost3) {
        crystalCount -= cost3
        base += 5
        perClick *= base
        crystals.innerHTML = "Crystals: " + crystalCount
    }
})

upgradebtn4.addEventListener("click", () => {
    if (crystalCount >= cost4) {
        crystalCount -= cost4
        // Each drone adds 25 passive/sec, scaled by multiplier
        droneDmg += 25
        passiveIncome += 25 * incomeMultiplier
        crystals.innerHTML = "Crystals: " + crystalCount
        income.innerHTML = "Passive/sec: " + passiveIncome
    }
})

upgradebtn5.addEventListener("click", () => {
    if (crystalCount >= cost5) {
        crystalCount -= cost5
        // Double income multiplier and scale existing incomes
        incomeMultiplier *= 2
        perClick *= 2
        passiveIncome *= 2
        crystals.innerHTML = "Crystals: " + crystalCount
        income.innerHTML = "Passive/sec: " + passiveIncome
    }
})

// Single passive income ticker (prevents stacking intervals)
setInterval(() => {
    if (passiveIncome > 0) {
        crystalCount += passiveIncome
        crystals.innerHTML = "Crystals: " + crystalCount
        income.innerHTML = "Passive/sec: " + passiveIncome
    }
}, 1000)