let crystals = document.getElementById("crystalDisplay")
let income = document.getElementById("passiveIncome")
const img = document.getElementById("Image")
const rockBreakSound = document.getElementById("rockBreakSound")
const bgMusic = document.getElementById("bgMusic")
const muteBtn = document.getElementById("muteBtn")
let upgradeCost1 = document.getElementById("cost1")
let upgradeCost2 = document.getElementById("cost2")
let upgradeCost3 = document.getElementById("cost3")
let upgradeCost4 = document.getElementById("cost4")
let upgradeCost5 = document.getElementById("cost5")
let upgradeCost6 = document.getElementById("cost6")
const upgradebtn1 = document.getElementById("upgradeBtn1")
const upgradebtn2 = document.getElementById("upgradeBtn2")
const upgradebtn3 = document.getElementById("upgradeBtn3")
const upgradebtn4 = document.getElementById("upgradeBtn4")
const upgradebtn5 = document.getElementById("upgradeBtn5")
const upgradebtn6 = document.getElementById("upgradeBtn6")
const eqBtn = document.getElementById("eq1")
const earth = document.getElementById("earthBtn")
let crystalCount = 0
let passiveIncome = 0
let perClick = 100000000000
let cost1 = 50
let cost2 = 250
let cost3 = 750
let cost4 = 2000
let cost5 = 10000
let cost6 = 100000
let eqBtnCost = 250000000
let eq2BtnCost = 500000000
let earthBtnCost = 100000000000
let eqBtnPurchased = false
let eq2BtnPurchased = false
let earthBtnPurchased = false
let maxUpgrades = 25
let maxUpgrades6 = 20
let level1 = 0
let level2 = 0
let level3 = 0
let level4 = 0
let level5 = 0
let level6 = 0
let base = 0
let droneDmg = 0
let incomeMultiplier = 1
let soundTimeout = null

bgMusic.volume = 0.1

function shortenNumbers(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "B"
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "M"
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(2) + "K"
    }
    return num
}

function updateUpgradeDisplay(costElement, cost, level, maxLevel) {
    if (level >= maxLevel) {
        costElement.innerHTML = "MAXED"
        return
    }

    costElement.innerHTML = "Cost: " + shortenNumbers(cost) + " (" + level + "/" + maxLevel + ")"
}


img.addEventListener("click", () => {
    crystalCount += perClick
    crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
    
    clearTimeout(soundTimeout)
    rockBreakSound.currentTime = 0
    rockBreakSound.volume = 0.02
    rockBreakSound.play()
    soundTimeout = setTimeout(() => {
        rockBreakSound.pause()
    }, 1000)
})


upgradebtn1.addEventListener("click", () => {
    if (level1 < maxUpgrades && crystalCount >= cost1) {
        crystalCount -= cost1
        perClick += 1
        cost1 *= 2
        level1 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost1, cost1, level1, maxUpgrades)
    }
})

upgradebtn2.addEventListener("click", () => {
    if (level2 < maxUpgrades && crystalCount >= cost2) {
        crystalCount -= cost2
        passiveIncome += 1 * incomeMultiplier
        cost2 *= 2
        level2 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost2, cost2, level2, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn3.addEventListener("click", () => {
    if (level3 < maxUpgrades && crystalCount >= cost3) {
        crystalCount -= cost3
        base += 5
        perClick *= base
        cost3 *= 2
        level3 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost3, cost3, level3, maxUpgrades)
    }
})

upgradebtn4.addEventListener("click", () => {
    if (level4 < maxUpgrades && crystalCount >= cost4) {
        crystalCount -= cost4
        droneDmg += 25
        passiveIncome += 25 * incomeMultiplier
        cost4 *= 2
        level4 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost4, cost4, level4, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn5.addEventListener("click", () => {
    if (level5 < maxUpgrades && crystalCount >= cost5) {
        crystalCount -= cost5
        incomeMultiplier *= 2
        perClick *= 2
        passiveIncome *= 2
        cost5 *= 2
        level5 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost5, cost5, level5, maxUpgrades)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})

upgradebtn6.addEventListener("click", () => {
    if (level6 < maxUpgrades6 && crystalCount >= cost6) {
        crystalCount -= cost6
        passiveIncome *= 3
        perClick *= 1.5
        incomeMultiplier *= 1.25
        cost6 *= 2
        level6 += 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        updateUpgradeDisplay(upgradeCost6, cost6, level6, maxUpgrades6)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
})


setInterval(() => {
    if (passiveIncome > 0) {
        crystalCount += passiveIncome
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
    }
}, 1000)

muteBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play()
        muteBtn.innerHTML = "🔊 Music"
    } else {
        bgMusic.pause()
        muteBtn.innerHTML = "🔇 Muted"
    }
})

eqBtn.addEventListener("click", () => {
    if (crystalCount >= eqBtnCost && eqBtnPurchased === false) {
        crystalCount -= eqBtnCost
        eqBtnPurchased = true
        document.getElementById("eq1").innerHTML = "Purchased"
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
    }
    else if (eqBtnPurchased === true) {
        alert("You already have this equipment!")
    }
    else {
        alert("You don't have enough crystals to purchase this equipment!")
    }
})

earthBtn.addEventListener("click", () => {
    if (crystalCount >= earthBtnCost && earthBtnPurchased === false && eqBtnPurchased === true && level6 >= 10) {
        earthBtnPurchased = true
        earth.innerHTML = "Purchased"
        
        crystalCount = 0
        passiveIncome = 0
        perClick = 100000000000
        cost1 = 50
        cost2 = 250
        cost3 = 750
        cost4 = 2000
        cost5 = 10000
        cost6 = 100000
        eqBtnCost = 250000000
        earthBtnCost = 100000000000
        maxUpgrades = 25
        maxUpgrades6 = 20
        level1 = 0
        level2 = 0
        level3 = 0
        level4 = 0
        level5 = 0
        level6 = 0
        base = 0
        droneDmg = 0
        incomeMultiplier = 1
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
        income.innerHTML = "Passive/sec: " + shortenNumbers(passiveIncome)
        updateUpgradeDisplay(upgradeCost1, cost1, level1, maxUpgrades)
        updateUpgradeDisplay(upgradeCost2, cost2, level2, maxUpgrades)
        updateUpgradeDisplay(upgradeCost3, cost3, level3, maxUpgrades)
        updateUpgradeDisplay(upgradeCost4, cost4, level4, maxUpgrades)
        updateUpgradeDisplay(upgradeCost5, cost5, level5, maxUpgrades)
        updateUpgradeDisplay(upgradeCost6, cost6, level6, maxUpgrades6)
        img.src = "images/earthImg.png"
        document.getElementById("eq2").style.display = "block"
        document.getElementById("eq2Cost").style.display = "block"
    }
    else if (earthBtnPurchased === true) {
            alert("You already have this planet!")
    }
    else if (eqBtnPurchased === false || level6 < 10) {
        alert("You need to purchase the equipment and have at least 10 levels of upgrade 6 to unlock this planet!")
    }
    else {
        alert("You don't have enough crystals to purchase this planet!")
    }
})

document.getElementById("eq2").addEventListener("click", () => {
    if (crystalCount >= eq2BtnCost && eq2BtnPurchased === false){
        crystalCount -= eq2BtnCost
        eq2BtnPurchased = true
        document.getElementById("eq2").innerHTML = "Purchased"
        crystals.innerHTML = "Crystals: " + shortenNumbers(crystalCount)
    }
    else if (eq2BtnPurchased === true) {
        alert("You already have this equipment!")
    }
    else {
        alert("You don't have enough crystals to purchase this equipment!")
    }
})