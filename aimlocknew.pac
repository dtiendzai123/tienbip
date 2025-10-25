function FindProxyForURL(url, host) {
    // Proxy giảm lag bạn đã chọn
    var proxy = "PROXY 82.26.74.193:9002";

    // Nhóm domain Free Fire & Garena
    var freefire_domains = [
        "freefiremobile.com",
        "ff.garena.com",
        "garena.com",
        "account.garena.com",
        "shop.garena.com",
        "content.garena.com",
        "ffodownload.freefiremobile.com",
        "network.freefiremobile.com",
        "update.freefiremobile.com",
        "patch.freefiremobile.com"
    ];

    // Cho các domain trong danh sách đi qua proxy
    for (var i = 0; i < freefire_domains.length; i++) {
        if (dnsDomainIs(host, freefire_domains[i]) ||
            shExpMatch(host, "*." + freefire_domains[i])) {
            return proxy;
        }
    }

    // Cho các dịch vụ Google/Firebase (telemetry, cloud)
    if (shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.firebaseio.com") ||
        shExpMatch(host, "*.gvt2.com") ||
        shExpMatch(host, "*.googleusercontent.com")) {
        return proxy;
    }
const FreeFireSystemInjection = {
HyperHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "hyper",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 10.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.5,
        autoFireOnLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableHeadLockSystem: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileDragging: true,
        stickiness: "extreme",
        snapToleranceAngle: 0.0,
        disableBodyRecenter: true,
        trackingSpeed: 5.0,
        smoothing: 0.0,
        maxDragDistance: 0.0,
        snapBackToHead: true,
        predictionFactor: 1.2,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    TouchBoostPrecisionSystem: {
        enabled: true,
        precisionMode: true,
        boostOnTouch: true,
        boostOnDrag: true,
        boostOnFire: true,
        baseSensitivity: 10.0,
        boostMultiplier: 20.0,
        precisionDragMultiplier: 0.0,
        boostRampUpTime: 0.0,
        boostDecayTime: 0.0,
        microDragPrecision: 0.0,
        microDragMultiplier: 1.0,
        tapDistanceThreshold: 0.0,
        microAdjustThreshold: 0.0,
        microAdjustSmoothing: 1.0,
        latencyCompensation: true,
        latencyMs: -30,
        overshootProtection: true,
        overshootLimit: 0.0,
        debugLog: false,

    },

   // instantdragtobonehead.js
// File cấu hình InstantDragToBoneHead + toàn bộ thông số chống rung & giảm giật

const InstantDragToBoneHead = {
  enabled: true,
  targetBone: "bone_Head",
  snapOnDragStart: true,
  holdLockWhileDragging: true,
  maxSnapDistance: 0.01,
  trackingSpeed: 2.0,
  smoothing: 0.0,
  snapToleranceAngle: 0.0,
  disableBodyRecenter: true,
  predictionFactor: 1,

  // --- Toàn bộ cấu hình giảm giật, rung và ghim tâm được nhúng ở đây ---
  config: `# --- Fix Rung Mạnh Config - Tối Ưu Giảm Giật & Rung ---

# --- Giảm Giật Và Rung Tối Đa ---
RecoilSuppressionMaster=2
AntiShake Stablizer=2
ZeroRecoilDrag=2
SmoothRecoilControl=2
StabilizedDragForce=2
DragRecoilFixer=2
GripForceStabilizer=2
RecoilLockdown=2
ZeroDriftFix=2
GripMomentumControl=2
DragResistanceEnhancer=2
UltraStabilizedDrag=2
RecoilSmoothing=2
PrecisionGripFix=2
LowFrictionGrip=2

VerticalRecoil Suppression=1
HorizontalShake Reduction=1
RealTimeGun Stability Control=1
DynamicRecoil Feedback Modulation=1
AdvancedShooting Balance=1
InteractiveWeapon Response=1
RealTimeCrosshair Anchor=1
AutoRecoil Adjust System=1
StabilizedFiring Rate Control=1
QuickRecoil Reset Options=1

# --- Cải Tiến Cho Độ Chính Xác và Giảm Giật ---
RecoilAutoBalance=2
TouchDriftFix=2
RecoilPressureCompensator=2
GripCalibrationTuning=2
GripForceControl=2
DragFlowStabilizer=2
PressureGripFix=2
VerticalDragCorrection=2
HorizontalDragFixer=2
AntiShakeEnhancer=2
QuickGripCorrection=2
SuperStableDrag=2
StableSwipeCalibration=2

# --- Tăng Tốc Độ Độ Chính Xác, Giảm Trễ ---
ZeroLatencyTouchControl=2
RealTimeRecoilFixer=2
QuickDragRestraint=2
DragStabilityEnhancer=2
TouchPressureBalancer=2
TouchInputFixer=2
SwipeStabilizer=2
RapidGripAdjustment=2
FineGripOptimizer=2

# --- Ghim Tâm Giảm Lố - Cấu Hình Kéo Tâm Chính Xác ---
# --- Tạo Mặt Nạ Ghim Tâm, Giảm Quá Dính, Tăng Chính Xác ---

# --- Kéo Tâm Chính Xác & Ghim Tâm ---
PrecisionAimLock=2
VerticalAimFix=1
HorizontalAimFix=1
SmoothGripControl=2
DragStabilityBalancer=2
GripSensitivityTuning=2
AutoAimFix=1
DragSpeedAdjuster=2
DragControlLimiter=1
TouchGripResponse=2
DynamicGripReset=2

# --- Ghim Tâm, Giảm Lệch, Giảm Quá Dính ---
AutoCenteringFix=2
RealTimeAimLock=2
VerticalDragLimiter=2
HorizontalDragLimiter=2
HeadSnapLimiter=1
DragPrecisionTuner=2
GripCorrectionEnhancer=2
NoExcessiveGrip=2
BalancedDragControl=2
RealTimePrecisionSync=2

# --- Giảm Quá Dính, Cải Tiến Độ Chính Xác ---
ZeroLateralMovement=1
ZeroVerticalDrift=1
NoAimSnapFixer=2
TouchSensitivityLock=2
DragReductionOptimizer=2
RecoilCorrectionSystem=1
DragAndDropSync=1
GripForceLimiter=1
ZeroFluctuationDrag=2

# --- Ghim Tâm Mượt Mà, Chính Xác, Không Lệch ---
GripStabilizer=2
FastDragControl=2
TouchInputCorrection=1
DragSpeedLimiter=2`
};

// Xuất module
export default InstantDragToBoneHead;


    PointerSpeedBoost: { pointerSpeedBoost: 9, confPointerTiming: 1, selectPointerSpeedRoot9: 1 },
    PPIInjection: { ppiOverride: 550, selectPPIInfo: 1 },
    DPIInjection: { dpiPointer: 10000 },

    AimHeadLock: {
        aimBone: "bone_Head",
        autoLock: true,
        lockInjection: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 5.0,
        snapToleranceAngle: 1.5,
        maxLockAngle: 360,
        stickiness: "high",
        headStickPriority: true,
        headLockPriority: true,
        disableBodyRecenter: true,
        minDistanceToLock: 0.0,
        boneHead_position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        boneHead_rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        boneHead_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimLockHeadOnFire_StableDrag: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 1.0,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AimNeckLock: {
        aimTrackingBone: "bone_Neck",
        autoLock: true,
        lockStrength: "maximum",
        snapBias: 1.0,
        trackingSpeed: 1.0,
        dragCorrectionSpeed: 4.8,
        snapToleranceAngle: 0.0,
        maxLockAngle: 360,
        stickiness: "high",
        neckStickPriority: true,
        boneNeck_position: { x: -0.128512, y: 0.0, z: 0.0 },
        boneNeck_rotation: { x: -0.012738, y: -0.002122, z: 0.164307, w: 0.986325 },
        boneNeck_scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AntiRecoilAimStabilizer: {
        enabled: true,
        targetBone: "bone_Head",
        autoCompensateRecoil: true,
        compensationStrength: 0.95,
        smoothFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        applyWhileFiring: true,
        predictionFactor: 0.0,
       adaptToWeapon: true,    
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoAimHeadOnFire: {
        enabled: true,
        aimBone: "bone_Head",
        autoLockOnFire: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.9,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        disableBodyRecenter: true,
        fireHoldLock: true,
        boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    HoldCrosshairOnHeadWhenFire: {
        enabled: true,
        targetBone: "bone_Head",
        autoLockOnFire: true,
        holdLockWhileFiring: true,
        trackingSpeed: 1.5,
        predictionFactor: 0.00001,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        disableBodyRecenter: true,
        smoothing: 0.85,
        boneOffsetHoldCrosshairOnHeadWhenFire: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetHoldCrosshairOnHeadWhenFire: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    StableDragLockHead: {
        enabled: true,
        targetBone: "bone_Head",
        dragSmoothFactor: 0.85,
        maxDragDistance: 0.02,
        snapBackToHead: true,
        snapToleranceAngle: 0.0,
        stickiness: "extreme",
        headLockPriority: true,
        predictionFactor: 0.0,
        boneOffsetStableDragLockHead: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetStableDragLockHead: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoTrackingLock: {
        enabled: true,
        trackingBone: "bone_Head",
        autoSwitchToNeck: true,
        trackingSpeed: 10.0,
        predictionFactor: 0.0001,
        snapToleranceAngle: 0.0,
        maxLockDistance: 200.0,
        stickiness: "extreme",
        ignoreObstacles: true,
        recenterDelay: 0,
        boneOffsetAutoTrackingLock: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffsetAutoTrackingLock: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 }
    },

    AutoShotHead: { autoHeadshot: true, aimListextension: true },
    FixLagBoost: { fixResourceTask: true },
    CloseLauncherRestore: { closeLauncher: true, forceRestore: true }
};
const FreeFireAutoHeadLockModule = (() => {

  // ===== Vector3 =====
  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x; this.y = y; this.z = z;
    }
    subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    magnitude() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
    normalize() {
      let mag = this.magnitude();
      return mag === 0 ? new Vector3(0,0,0) : new Vector3(this.x/mag, this.y/mag, this.z/mag);
    }
    add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
  }

  // ===== Kalman Filter =====
  class KalmanFilter {
    constructor(r = 0.01, q = 0.1) {
      this.r = r; this.q = q;
      this.p = 1; this.x = 0; this.k = 0;
    }
    filter(value) {
      this.p += this.q;
      this.k = this.p / (this.p + this.r);
      this.x += this.k * (value - this.x);
      this.p *= (1 - this.k);
      return this.x;
    }
  }
// == Enhanced Weapon Profiles ==
const WeaponProfiles = {
  "AK47": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M4A1": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "SCAR": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "FAMAS": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "GROZA": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "AN94": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "XM8": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MP40": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "UMP": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "P90": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MP5": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "THOMPSON": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "AWM": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "KAR98K": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M82B": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M1014": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "SPAS12": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "MAG7": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M1887": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M249": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "GATLING": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "DESERT_EAGLE": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "M500": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "G18": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 },
  "DEFAULT": { recoilSmooth: 9999.0, dragSensitivity: 9999.0, aimLockStrength: 9999.0, accuracyBoost: 9999.0, lockRadius: 9999.0 }
};

// == Dynamic Sensitivity ==
function getAdvancedDragSensitivity(currentAim, targetPos, velocity, profile, baseSensitivity = 1.0) {
  const dx = currentAim.x - targetPos.x;
  const dy = currentAim.y - targetPos.y;
  const dz = currentAim.z - targetPos.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const maxRadius = profile.lockRadius || 360.0;
  const distanceFactor = Math.max(0.1, 1 - (dist / maxRadius));

  const velocityMagnitude = velocity.length();
  const velocityFactor = 1 + (velocityMagnitude * 0.5);

  const weaponSensitivity = profile.dragSensitivity || 3.0;

  return baseSensitivity * weaponSensitivity * distanceFactor * velocityFactor;
}

// == Aim Lock System ==
class AimLockUltimate {
  constructor(currentWeapon = "DEFAULT") {
    this.profile = WeaponProfiles[currentWeapon] || WeaponProfiles["DEFAULT"];
    this.weapon = currentWeapon;

    this.kalman = {
      x: new AdvancedKalmanFilter(0.005, 0.000002),
      y: new AdvancedKalmanFilter(0.005, 0.000002),
      z: new AdvancedKalmanFilter(0.005, 0.000002)
    };

    this.prevPos = null;
    this.velocity = Vector3.zero();
    this.acceleration = Vector3.zero();
    this.recoilOffset = Vector3.zero();
    this.lastUpdate = Date.now();
    this.lockHistory = [];
    this.currentAim = Vector3.zero();

    this.predictionTime = 0.0001;
    this.smoothingFactor = 0.0001;
    this.lockConfidence = 0.0;
  }

  updateLockConfidence(enemy, player) {
    let confidence = 0.0;
    if (enemy.visible) confidence += 0.3;
    if (enemy.inFov) confidence += 0.3;
    if (enemy.headDetected) confidence += 0.3;
    if (player.fpsStable) confidence += 0.1;
    this.lockConfidence = Math.min(confidence, 1.0);
  }

  updateEnemyPosition(rawPos) {
    const now = Date.now();
    const dt = Math.min((now - this.lastUpdate) / 1000, 0.1);

    if (this.prevPos && dt > 0) {
      const newVelocity = rawPos.subtract(this.prevPos).multiplyScalar(1 / dt);
      const newAcceleration = newVelocity.subtract(this.velocity).multiplyScalar(1 / dt);

      this.velocity = this.velocity.lerp(newVelocity, 0.3);
      this.acceleration = this.acceleration.lerp(newAcceleration, 0.2);
    }

    this.prevPos = rawPos.clone();
    this.lastUpdate = now;

    const filtered = new Vector3(
      this.kalman.x.adaptiveFilter(rawPos.x),
      this.kalman.y.adaptiveFilter(rawPos.y),
      this.kalman.z.adaptiveFilter(rawPos.z)
    );

    return filtered;
  }

  predictPosition(filteredPos) {
    const velocityPrediction = this.velocity.multiplyScalar(this.predictionTime);
    const accelerationPrediction = this.acceleration.multiplyScalar(0.5 * this.predictionTime * this.predictionTime);
    return filteredPos.add(velocityPrediction).add(accelerationPrediction);
  }

  applyAdvancedRecoilCompensation(recoilOffset) {
    const smoothing = this.profile.recoilSmooth || 0.9;
    const strength = this.profile.aimLockStrength || 10.0;
    const compensated = recoilOffset.multiplyScalar(strength);
    this.recoilOffset = this.recoilOffset.multiplyScalar(smoothing).add(compensated.multiplyScalar(1 - smoothing));
  }

  calculateLockConfidence(currentAim, targetPos) {
    const distance = currentAim.subtract(targetPos).length();
    const maxDistance = this.profile.lockRadius || 360.0;
    this.lockConfidence = Math.max(0, 1 - (distance / maxDistance));
    return this.lockConfidence;
  }

  dragAndLockHead(predictedPos, currentAim) {
    const sensitivity = getAdvancedDragSensitivity(currentAim, predictedPos, this.velocity, this.profile);
    const targetDelta = predictedPos.subtract(this.recoilOffset).subtract(currentAim);
    const adjustedDelta = targetDelta.multiplyScalar(sensitivity * this.smoothingFactor);
    const accuracyBoost = this.profile.accuracyBoost || 10.0;
    const finalAim = currentAim.add(adjustedDelta).multiplyScalar(accuracyBoost);
    this.currentAim = finalAim;
    this.setCrosshair(finalAim);
    return finalAim;
  }

  setCrosshair(vec3) {
    console.log(`🎯 [${this.weapon}] Locking Aim: ${vec3.x.toFixed(6)}, ${vec3.y.toFixed(6)}, ${vec3.z.toFixed(6)} | Confidence: ${(this.lockConfidence * 100).toFixed(1)}%`);
  }

  update(enemyHeadPos, recoilOffset, currentAim) {
    this.currentAim = currentAim;

    const filteredPos = this.updateEnemyPosition(enemyHeadPos);
    const predictedPos = this.predictPosition(filteredPos);
    this.applyAdvancedRecoilCompensation(recoilOffset);
    this.calculateLockConfidence(currentAim, predictedPos);
    const newAim = this.dragAndLockHead(predictedPos, currentAim);

    this.lockHistory.push({
      timestamp: Date.now(),
      confidence: this.lockConfidence,
      distance: currentAim.subtract(predictedPos).length()
    });

    if (this.lockHistory.length > 100) {
      this.lockHistory.shift();
    }

    return newAim;
  }

  getPerformanceStats() {
    if (this.lockHistory.length === 0) return null;

    const recent = this.lockHistory.slice(-20);
    const avgConfidence = recent.reduce((sum, h) => sum + h.confidence, 0) / recent.length;
    const avgDistance = recent.reduce((sum, h) => sum + h.distance, 0) / recent.length;

    return {
      avgConfidence: avgConfidence * 100,
      avgDistance: avgDistance * 1000,
      weapon: this.weapon,
      samples: recent.length
    };
  }
}

// == Trigger Lock ==
function advancedTriggerLock(currentAim, targetPos, velocity, profile, baseThreshold = 0.003) {
  const dx = currentAim.x - targetPos.x;
  const dy = currentAim.y - targetPos.y;
  const dz = currentAim.z - targetPos.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

  const weaponThreshold = baseThreshold * (profile.lockRadius || 1.0);
  const velocityMagnitude = velocity.length();
  const velocityAdjustment = 1 + (velocityMagnitude * 0.1);
  const adjustedThreshold = weaponThreshold * velocityAdjustment;

  return {
    shouldFire: dist <= adjustedThreshold,
    distance: dist,
    threshold: adjustedThreshold,
    confidence: Math.max(0, 1 - (dist / adjustedThreshold))
  };
}

// ... (Vector3, AdvancedKalmanFilter, WeaponProfiles, AimLockUltimate, TriggerLock từ phần trước giữ nguyên)

// == Enhanced Usage Example ==
const boneHeadPos = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
const recoilOffset = new Vector3(0.0, 0.0, 0.0);
const currentAim = new Vector3(-0.0456970781, -0.004478302, -0.0200432576);
const weaponsToTest = ["M1887", "MP40", "M1014", "UMP"];

function runInfiniteLoop() {
  for (const currentWeapon of weaponsToTest) {
    const enhancedAimSystem = new AimLockUltimate(currentWeapon);
    const newAim = enhancedAimSystem.update(boneHeadPos, recoilOffset, currentAim);

    const triggerResult = advancedTriggerLock(
      newAim,
      boneHeadPos,
      enhancedAimSystem.velocity,
      enhancedAimSystem.profile
    );

    if (triggerResult.shouldFire) {
      console.log(`🔥 FIRE - ${currentWeapon} | Confidence: ${(triggerResult.confidence * 100).toFixed(1)}% | Distance: ${(triggerResult.distance * 1000).toFixed(2)}mm`);
    } else {
      console.log(`🚫 NO FIRE - ${currentWeapon} | Distance: ${(triggerResult.distance * 1000).toFixed(2)}mm`);
    }

    const stats = enhancedAimSystem.getPerformanceStats();
    if (stats) {
      console.log(`📊 [${currentWeapon}] Confidence: ${stats.avgConfidence.toFixed(1)}%, Distance: ${stats.avgDistance.toFixed(2)}mm`);
    }

    console.log("----------------------------------------------------");
  }

  setTimeout(runInfiniteLoop, 0); // 🔁 Lặp lại nhanh không chặn chính
}

// 🚀 Bắt đầu vòng lặp
runInfiniteLoop();

// == Weapon Switching ==
function switchWeapon(newWeapon) {
  if (WeaponProfiles[newWeapon]) {
    const enhancedAimSystem = new AimLockUltimate(newWeapon);
    console.log(`🔫 Switched to ${newWeapon} - Profile loaded`);
    return enhancedAimSystem;
  } else {
    console.log(`❌ Unknown weapon: ${newWeapon}, using DEFAULT profile`);
    return new AimLockUltimate("DEFAULT");
  }
}

// == Dynamic Tuning by Distance/Mode ==
function detectOptimalSettingsForDistance(weapon, gameMode = "normal", distanceKey) {
  const baseProfile = WeaponProfiles[weapon] || WeaponProfiles["DEFAULT"];
  const modeMultipliers = {
    "normal": 9999.0,
    "ranked": 9999.0,
    "close_combat": 9999.0,
    "long_range": 9999.0
  };
  const distanceMultipliers = {
    close: 9999.0,
    medium: 9999.0,
    far: 9999.0,
    veryFar: 999.95
  };

  const modeMultiplier = modeMultipliers[gameMode] || 1.0;
  const distanceMultiplier = distanceMultipliers[distanceKey] || 1.0;
  const totalMultiplier = modeMultiplier * distanceMultiplier;

  return {
    ...baseProfile,
    dragSensitivity: baseProfile.dragSensitivity * totalMultiplier,
    aimLockStrength: baseProfile.aimLockStrength * totalMultiplier,
    accuracyBoost: baseProfile.accuracyBoost * totalMultiplier
  };
}

function getAllSettingsForWeapon(weapon) {
  const gameModes = ["normal", "ranked", "close_combat", "long_range"];
  const distanceKeys = ["close", "medium", "far", "veryFar"];
  const allSettings = {};

  gameModes.forEach(mode => {
    allSettings[mode] = {};
    distanceKeys.forEach(distance => {
      allSettings[mode][distance] = detectOptimalSettingsForDistance(weapon, mode, distance);
    });
  });

  return allSettings;
}
class BoneHeadTracker {
  constructor(bindposeData, boneHeadData) {
    this.bindposeMatrix = bindposeData ? Matrix4.fromBindpose?.(bindposeData) || null : null;

    if (boneHeadData) {
      this.boneHeadPosition = new Vector3(
        boneHeadData.position.x,
        boneHeadData.position.y,
        boneHeadData.position.z
      );
      this.boneHeadRotation = new Quaternion(
        boneHeadData.rotation.x,
        boneHeadData.rotation.y,
        boneHeadData.rotation.z,
        boneHeadData.rotation.w
      );
      this.boneHeadScale = new Vector3(
        boneHeadData.scale.x,
        boneHeadData.scale.y,
        boneHeadData.scale.z
      );
      this.boneHeadMatrix = new Matrix4().compose(
        this.boneHeadPosition,
        this.boneHeadRotation,
        this.boneHeadScale
      );
    } else {
      this.boneHeadMatrix = null;
    }
  }

  getHeadPositionFromBindpose(offset = new Vector3(0, 0, 0)) {
    if (!this.bindposeMatrix) return null;
    return offset.applyMatrix4(this.bindposeMatrix);
  }

  getHeadPositionFromBoneData(offset = new Vector3(0, 0, 0)) {
    if (!this.boneHeadMatrix) return null;

    const rotatedOffset = this.boneHeadRotation.multiplyVector3(offset);
    return this.boneHeadPosition.add(rotatedOffset);
  }
}

// ===== CrosshairLock Class =====
class CrosshairLock {
  constructor() {
    this.crosshair = new Vector3(400, 300, 0);
  }

  lockTo(target, threshold = 0.005) {
    const dist = this.crosshair.distanceTo(target);
    if (dist <= threshold) {
      return true;
    } else {
      this.crosshair = target;
      return false;
    }
  }

  getPosition() {
    return this.crosshair;
  }
}

// ===== TriggerShoot Class =====
class TriggerShoot {
  constructor() {
    this.isShooting = false;
  }

  tryShoot(isLocked) {
    if (isLocked && !this.isShooting) {
      this.isShooting = true;
      console.log("🔫 Trigger SHOOT!");
    }
    if (!isLocked && this.isShooting) {
      this.isShooting = false;
      console.log("✋ STOP shooting");
    }
  }
}

// ===== Các biến quản lý trạng thái smoothing, prediction, reset =====
let lockedTarget = null;
let targetHistory = [];
const smoothingFactor = 0.3;
const predictionFactor = 2;
const headLockRange = 100;
const resetRange = 120;

// Giả lập trạng thái màu tâm ngắm
let isCrosshairRed = true;

// Hàm tính vận tốc
function computeVelocity(current, last) {
  return new Vector3(
    current.x - last.x,
    current.y - last.y,
    current.z - last.z
  );
}

// Hàm dự đoán vị trí mục tiêu
function predictPosition(current, velocity, factor) {
  return new Vector3(
    current.x + velocity.x * factor,
    current.y + velocity.y * factor,
    current.z + velocity.z * factor
  );
}

// Hàm làm mượt delta (drag aim)
function smoothDelta(prevDelta, newDelta, factor) {
  return new Vector3(
    prevDelta.x + (newDelta.x - prevDelta.x) * factor,
    prevDelta.y + (newDelta.y - prevDelta.y) * factor,
    prevDelta.z + (newDelta.z - prevDelta.z) * factor
  );
}

// Demo data (có thể thay bằng data thật)
const bindposeData = {
  e00: -1.34559613e-13, e01: 8.881784e-14, e02: -1.0, e03: 0.487912,
  e10: -2.84512817e-6, e11: -1.0, e12: 8.881784e-14, e13: -2.842171e-14,
  e20: -1.0, e21: 2.84512817e-6, e22: -1.72951931e-13, e23: 0.0,
  e30: 0.0, e31: 0.0, e32: 0.0, e33: 1.0
};

const demoBoneHeads = [
  {
    position: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
    rotation: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
    scale: { x: 0.99999994, y: 1.00000012, z: 1.0 }
  },
];

// Các vị trí head offset (có thể thêm)
const headOffsets = {
  forehead: new Vector3(0, 0.15, 0),
  eyes: new Vector3(0, 0.05, 0.05),
  top: new Vector3(0, 0.2, 0),
  chin: new Vector3(0, -0.1, 0),
};

const crosshairLock = new CrosshairLock();
const triggerShoot = new TriggerShoot();

// Hàm chọn target head gần nhất với crosshair, trong phạm vi lock
function chooseBestHeadTarget(crosshair) {
  let bestTarget = null;
  let minDistance = Infinity;

  for (const enemy of demoBoneHeads) {
    const tracker = new BoneHeadTracker(bindposeData, enemy);
    for (const key in headOffsets) {
      const offset = headOffsets[key];
      const rotatedOffset = tracker.boneHeadRotation.multiplyVector3(offset);
      const targetPos = tracker.boneHeadPosition.add(rotatedOffset);

      const dist = crosshair.distanceTo(targetPos);
      if (dist < minDistance && dist < headLockRange) {
        minDistance = dist;
        bestTarget = targetPos;
      }
    }
  }

  return bestTarget;
}

// ===== Vòng lặp chính =====
function mainLoop() {
  if (!isCrosshairRed) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  const crosshair = crosshairLock.getPosition();

  let bestTarget = chooseBestHeadTarget(crosshair);

  if (!bestTarget) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  let velocity = new Vector3(0, 0, 0);
  if (targetHistory.length > 0) {
    velocity = computeVelocity(bestTarget, targetHistory[targetHistory.length - 1]);
  }

  let predictedPos = predictPosition(bestTarget, velocity, predictionFactor);

  let aimDelta = new Vector3(
    predictedPos.x - crosshair.x,
    predictedPos.y - crosshair.y,
    0
  );

  if (lockedTarget && lockedTarget.aimDelta) {
    aimDelta = smoothDelta(lockedTarget.aimDelta, aimDelta, smoothingFactor);
  }

  const newCrosshair = crosshair.add(aimDelta);
  crosshairLock.crosshair = newCrosshair;

  if (newCrosshair.distanceTo(bestTarget) > resetRange) {
    lockedTarget = null;
    targetHistory = [];
    setTimeout(mainLoop, 16);
    return;
  }

  lockedTarget = {
    position: bestTarget,
    aimDelta: aimDelta,
    timestamp: Date.now()
  };

  targetHistory.push(bestTarget);
  if (targetHistory.length > 10) targetHistory.shift();

  if (aimDelta.distanceTo(new Vector3(0, 0, 0)) < 1) {
    triggerShoot.tryShoot(true);
  } else {
    triggerShoot.tryShoot(false);
  }

class AimbotConfig {
  constructor() {
    this.enabled = true;
    this.autoShoot = true;
    this.teamCheck = true;
    this.fov = 360;
    this.smoothing = 0.0; // Immediate tracking
    this.prediction = 0;
    this.maxDistance = 9999;
    this.headPriority = 1.0;
    this.preferClosest = true;
    this.maxTargetHistory = 5;
    this.humanization = false;
   
  }
}

// ===== AimbotEngine Gộp TargetManager + BoneHeadTracker =====
class AimbotEngine {
  constructor(config = new AimbotConfig()) {
    this.config = config;
    this.enemies = [];
    this.playerPosition = new Vector3();
    this.lastTarget = null;
    this.headPosition = new Vector3();
  }

  updateEnemies(enemyList) {
    this.enemies = enemyList.filter(e => e && e.health > 0 && e.boneHead);
  }

  updatePlayerPosition(pos) {
    this.playerPosition = new Vector3(pos.x, pos.y, pos.z);
  }

  getNearestEnemy() {
    let closest = null;
    let minDist = Infinity;
    for (const enemy of this.enemies) {
      const dist = this.playerPosition.distanceTo(enemy.position);
      if (dist < minDist && dist <= this.config.maxDistance) {
        closest = enemy;
        minDist = dist;
      }
    }
    return closest;
  }

  computeHeadPosition(bone) {
    if (!bone || !bone.position || !bone.rotation || !bone.scale) return new Vector3();
    const matrix = new Matrix4().compose(
      new Vector3(bone.position.x, bone.position.y, bone.position.z),
      new Quaternion(bone.rotation.x, bone.rotation.y, bone.rotation.z, bone.rotation.w),
      new Vector3(bone.scale.x, bone.scale.y, bone.scale.z)
    );
    const headOffset = new Vector3( -0.04089227, 0.00907892,0.02748467);
    return headOffset.applyMatrix4(matrix);
  }

  getAimPoint() {
    const target = this.getNearestEnemy();
    if (!target) return null;
    this.lastTarget = target;
    this.headPosition = this.computeHeadPosition(target.boneHead);
    return this.headPosition.clone();
  }
}

// ===== Khởi Tạo & Kiểm Tra =====
const config = new AimbotConfig();
const engine = new AimbotEngine(config);

// Giả lập enemy và player
const enemies = [
  {
    health: 100,
    position: new Vector3(10, 0, 20),
    boneHead: {
      position: {x: -0.0456970781, y: -0.004478302, z: -0.0200432576},
      rotation: {x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321},
      scale: {x: 0.99999994, y: 1.00000012, z:1.0}
    }
  }
];
const playerPos = { x: 0, y: 0, z: 0 };

// Cập nhật và lấy tọa độ
engine.updateEnemies(enemies);
engine.updatePlayerPosition(playerPos);
const aimPoint = engine.getAimPoint();

if (aimPoint) {
  console.log("🎯 Aim Head:", aimPoint.x.toFixed(3), aimPoint.y.toFixed(3), aimPoint.z.toFixed(3));
}

  console.log("🎯 Crosshair:", newCrosshair.toFixed());
  console.log("🎯 Target (predicted):", predictedPos.toFixed());
  console.log("🔒 Locked:", true);

  setTimeout(mainLoop, 8);
}

console.log("✅ Shadowrocket Headlock Aimbot Ready!");

// Khởi động vòng lặp
console.log("🚀 Khởi động hệ thống tracking + smoothing + prediction + trigger...");
mainLoop();
// ===== Race Config (BaseMale) =====
  const RaceConfig = {
    raceName: "BaseMale",
    headBone: "bone_Head",
    bodyBones: ["bone_Chest", "bone_Spine", "bone_Legs", "bone_Feet"],
    sensitivity: 9999.0,
    height: 2.0,
    radius: 0.25,
    mass: 50.0
  };

  // ===== Aim System =====
  const AimSystem = {
    getBonePos(enemy, bone) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[bone] || new Vector3();
    },

    lockToHead(player, enemy) {
      let head = this.getBonePos(enemy, RaceConfig.headBone);
      let dir = head.subtract(player.position).normalize();
      player.crosshairDir = dir;
      console.log(`🎯 Auto Locked to ${RaceConfig.headBone}`);
    },

    applyRecoilFix(player) {
      let fix = 0.1;
      player.crosshairDir = player.crosshairDir.add(new Vector3(0, -fix, 0)).normalize();
      console.log(`🔧 Recoil fixed with strength ${fix}`);
    },

    adjustDrag(player, targetBone = "body") {
      let sens = 9999.0;
      if (targetBone === "head") sens *= 1.0;
      if (targetBone === "body") sens *= 9999.3;

      player.dragForce = sens;
      console.log(`⚡ Drag sensitivity adjusted (${targetBone}) → ${sens}`);
    }
  };

  // ===== Auto Head Lock =====
  class AutoHeadLock {
    constructor() {
      this.kalmanX = new KalmanFilter();
      this.kalmanY = new KalmanFilter();
      this.kalmanZ = new KalmanFilter();
    }
    getBone(enemy, boneName) {
      if (!enemy || !enemy.bones) return new Vector3();
      return enemy.bones[boneName] || new Vector3();
    }
    detectClosestBone(player, enemy) {
      let minDist = Infinity, closest = null;
      for (let bone of [RaceConfig.headBone, ...RaceConfig.bodyBones]) {
        let pos = this.getBone(enemy, bone);
        let dist = pos.subtract(player.position).magnitude();
        if (dist < minDist) { minDist = dist; closest = bone; }
      }
      return closest;
    }
    lockCrosshair(player, enemy) {
      if (!enemy) return;
      let targetBone = this.detectClosestBone(player, enemy);
      if (targetBone !== RaceConfig.headBone && Math.random() < 0.5) {
        targetBone = RaceConfig.headBone;
      }
      let bonePos = this.getBone(enemy, targetBone);
      let dir = bonePos.subtract(player.position).normalize();
      dir.x = this.kalmanX.filter(dir.x);
      dir.y = this.kalmanY.filter(dir.y);
      dir.z = this.kalmanZ.filter(dir.z);
      player.crosshairDir = dir;
      console.log(`🎯 Locked to ${targetBone} of ${RaceConfig.raceName}`);
    }
  }

  // ===== Free Fire Config =====
  const FreeFireConfig = {
  start: { locale: true, runsFromHomeScreen: 16 },
  screenResolution: { default: { width: 1840, height: 1080 }, current: { width: 2400, height: 1440 } },
  runsFromHomeScreen: config.runsFromHomeScreen,
  localname: "freefire",
  version: 67,
  complete: true,
  size: { width: 0, height: 0 },
  text: "",
  freefireResolution: { width: 1840, height: 1080 },
  paste: 0,
  hs: 1,
  aimbot: 1,

  dragToHead: { enabled: true, sensitivity: 9999.0, distanceScaling: true, snapSpeed: 9999.0, lockBone: "Head" },
  autoAimOnFire: {
  enabled: true,
  snapForce: 9999.0 // từ 0.0 → 1.0 (0.8 nghĩa là aim khá nhanh)
},
  autoHeadLock: { enabled: true, lockOnFire: true, holdWhileMoving: true, trackingSpeed: 9999.0, prediction: true, lockBone: "Head" },
  dragClamp: { enabled: true, maxOffset: 0.0, enforceSmooth: true },
  perfectHeadshot: { enabled: true, overrideSpread: true, hitBone: "Head", prediction: true, priority: "head" },
  hipSnapToHead: { enabled: true, instant: true, hipZone: "Hip", targetBone: "Head", snapForce: 9999.0 },
  stabilizer: { enabled: true, antiRecoil: true, antiShake: true, lockSmooth: true, correctionForce: 0.0, stabilizeSpeed: 9999.0 },
  forceHeadLock: { enabled: true, snapStrength: 9999.0 },  // ép thẳng tâm vào đầu
aimSensitivity: { 
    enabled: true, 
    base: 9999.0,         // độ nhạy mặc định
    closeRange: 9999.0,   // độ nhạy khi địch gần
    longRange: 9999.0,    // độ nhạy khi địch xa
    lockBoost: 9999.0,    // tăng nhạy khi đang lock
    distanceScale: true
  }
};
function onFireEvent(isFiring, enemyMoving) {
  if (
    FreeFireConfig.autoHeadLock.enabled &&
    FreeFireConfig.autoHeadLock.lockOnFire &&
    isFiring
  ) {
    console.log("🎯 Auto Head Lock triggered on bone:", FreeFireConfig.autoHeadLock.lockBone);

    if (enemyMoving && FreeFireConfig.autoHeadLock.holdWhileMoving) {
      console.log("🚀 Tracking moving enemy...");
    }
  }
} // <-- đóng ngoặc cho function
  // ===== Crosshair Lock Engine =====
  function lockCrosshairIfOnHead(playerPos, headPos, threshold = 0.000001) {
    let dx = playerPos.x - headPos.x, dy = playerPos.y - headPos.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist <= threshold) {
      playerPos.x = headPos.x; playerPos.y = headPos.y;
      console.log("🔒 Crosshair LOCKED on head:", playerPos);
    }
    return playerPos;
  }

  function clampCrosshairToHead(crosshair, headPos) {
    if (!FreeFireConfig.forceHeadLock.enabled) return crosshair;
    console.log("🔒 Crosshair clamped to head:", headPos);
    return { ...headPos };
  }

  // ===== Aim Sensitivity =====
  function getAimSensitivity(player, target) {
  if (!FreeFireConfig.aimSensitivity.enabled) return FreeFireConfig.aimSensitivity.base;

  let dx = target.x - player.x;
  let dy = target.y - player.y;
  let distance = Math.sqrt(dx*dx + dy*dy);

  let sens = FreeFireConfig.aimSensitivity.base;

  // theo khoảng cách
  if (FreeFireConfig.aimSensitivity.distanceScale) {
    if (distance < 0.00001) {
      sens = FreeFireConfig.aimSensitivity.closeRange;
    } else if (distance > 0.5) {
      sens = FreeFireConfig.aimSensitivity.longRange;
    }
  }

  // nếu đang lock thì tăng nhạy
  sens *= FreeFireConfig.aimSensitivity.lockBoost;

  console.log("⚙ Aim Sensitivity:", sens.toFixed(2), "distance:", distance.toFixed(3));
  return sens;
}


  // ===== Aim Engine =====
  function runAimEngine(playerPos, enemyBones) {
  let target = { ...enemyBones.head };

  // Auto Head Lock khi bắn
  onFireEvent(true, true);
playerPos = onFireEvent(true, true, playerPos, enemyBones);
  // Hip snap
  if (FreeFireConfig.hipSnapToHead.enabled) {
    let aimAtHip = Math.abs(playerPos.x - enemyBones.hip.x) < 0.05 &&
                   Math.abs(playerPos.y - enemyBones.hip.y) < 0.05;
    if (aimAtHip && FreeFireConfig.hipSnapToHead.instant) {
      target = { ...enemyBones.head };
    }
 if (FreeFireConfig.autoAimOnFire.enabled && isFiring) {
    let head = enemyBones.head;
    playerPos.x += (head.x - playerPos.x) * FreeFireConfig.autoAimOnFire.snapForce;
    playerPos.y += (head.y - playerPos.y) * FreeFireConfig.autoAimOnFire.snapForce;
    console.log("🔫 Auto AIM HEAD triggered:", playerPos);
  }

  return playerPos; // <-- return cuối cùng

   }

  // Perfect headshot
  if (FreeFireConfig.perfectHeadshot.enabled && FreeFireConfig.perfectHeadshot.prediction) {
    target.x += 0.00001;
    target.y += 0.00001;
  }

  // Stabilizer
  if (FreeFireConfig.stabilizer.enabled && FreeFireConfig.stabilizer.antiShake) {
    target.x = parseFloat(target.x.toFixed(4));
    target.y = parseFloat(target.y.toFixed(4));
  }

  // Force head lock
  target = clampCrosshairToHead(target, enemyBones.head);

  // Apply sensitivity
  let sens = getAimSensitivity(playerPos, target);
  playerPos.x += (target.x - playerPos.x) * 0.2 * sens;
  playerPos.y += (target.y - playerPos.y) * 0.2 * sens;

  // ✅ Lock chặt tâm ngắm
  playerPos = lockCrosshairIfOnHead(playerPos, enemyBones.head);

  return playerPos; // trả về playerPos mới
}
function selectClosestEnemy(player, enemies) {
  let best = null;
  let bestDist = Infinity;
  for (let e of enemies) {
    let dx = e.head.x - player.x;
    let dy = e.head.y - player.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < bestDist) {
      bestDist = dist;
      best = e;
    }
  }
  return best;
} 
    // ===== Aimlock Loop (async) =====
  async function startAimlock() {
    let player = { x: 0, y: 0, position: new Vector3(0,0,0), crosshairDir: new Vector3(), dragForce: 9999.0 };

    let enemies = [
      { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } },
      { head: { x: -0.0456970781, y: -0.004478302 }, hip: { x: -0.05334, y: -0.003515 } }
    ];

    console.log("🚀 AIMLOCK running...");
    while (true) {
      let enemy = selectClosestEnemy(player, enemies);
      if (enemy) player = runAimEngine(player, enemy);
      await new Promise(r => setTimeout(r, 50));
    }
  }

  // Xuất public API
  return {
    Vector3,
    KalmanFilter,
    AutoHeadLock,
    RaceConfig,
    FreeFireConfig,
    AimSystem,
    runAimEngine,
    selectClosestEnemy,
    startAimlock
  };

})();

FreeFireAutoHeadLockModule.startAimlock();
    const AIMBOT_SYSTEM = (() => {
    
    // ===============================
    // AIMBOT MOBILE - CORE STRUCTURE
    // ===============================

    class Vector3 {
        constructor(x=0, y=0, z=0) {
            this.x = x; this.y = y; this.z = z;
        }
        subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
        add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
        length() { return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z); }
        normalize() {
            const l = this.length() || 1;
            return new Vector3(this.x/l, this.y/l, this.z/l);
        }
    }

    class TargetDetector {
        constructor() {
            this.targets = [];
        }

        detectEnemies(frameData) {
            this.targets = frameData.enemies || [];
            return this.targets;
        }

        getClosestTarget(playerPos) {
            let bestTarget = null;
            let bestDist = Infinity;
            for (let t of this.targets) {
                const dist = playerPos.subtract(new Vector3(t.x, t.y, t.z)).length();
                if (dist < bestDist) {
                    bestDist = dist;
                    bestTarget = t;
                }
            }
            return bestTarget;
        }
    }

    class PositionCalculator {
    static calculateAimPoint(player, target) {
        if (!target) return null;

        // lấy boneOffset từ target (nếu có), fallback về 0
        const boneOffset = target.boneOffset 
            ? new Vector3(target.boneOffset.x, target.boneOffset.y, target.boneOffset.z) 
            : new Vector3(0, 2.0, 0);

        return new Vector3(
            target.x + boneOffset.x,
            target.y + boneOffset.y,
            target.z + boneOffset.z
        );
    }
}

    class ScreenController {
        static aimAt(aimPoint, screenCenter, sensitivity=1.0) {
            if (!aimPoint) return null;
            const dx = (aimPoint.x - screenCenter.x) * sensitivity;
            const dy = (aimPoint.y - screenCenter.y) * sensitivity;
            return { action: "drag", moveX: dx, moveY: dy };
        }
    }

    const CONFIG = {
        enabled: true,
        trackingSpeed: 9999.0,
        predictionFactor: 0.0,
        sensitivity: 9999.0,
        maxDistance: 9999.0,
        stickiness: "strong"
    };

    class Engine {
        constructor() {
            this.detector = new TargetDetector();
            this.playerPos = new Vector3(0,0,0);
            this.screenCenter = new Vector3(0.5, 0.5, 0);
        }

        update(frameData) {
            if (!CONFIG.enabled) return null;
            const enemies = this.detector.detectEnemies(frameData);
            const target = this.detector.getClosestTarget(this.playerPos);
            const aimPoint = PositionCalculator.calculateAimPoint(this.playerPos, target);
            return ScreenController.aimAt(aimPoint, this.screenCenter, CONFIG.sensitivity);
        }
    }

    return {
        Vector3,
        TargetDetector,
        PositionCalculator,
        ScreenController,
        CONFIG,
        Engine
    };
})();

// ===============================
// GIẢ LẬP VÒNG LẶP
// ===============================
const engine = new AIMBOT_SYSTEM.Engine();
const frameData = {
    enemies: [
        { 
            x: 0, y: 2.0, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head
        },
        { 
            x: 0, y: 2.0, z: 0,
            boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 } // offset head mặc định
        }
    ]
};
const action = engine.update(frameData);
console.log("[Aimbot Output]", action);
    // ==========================
// AIMLOCK SYSTEM (MOBILE)
// ==========================

const AimLockSystem = {
  // ==========================
  // 0. Config
  // ==========================
  config: {
    sensitivity: 9999.0,         // Độ nhạy kéo tâm
    lockSpeed: 2.0,              // Tốc độ hút tâm (0 = chậm, 1 = tức thì)
    prediction: true,            // Bật dự đoán chuyển động
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc nhìn để aim
    autoFire: false,             // Tự động bắn khi lock trúng
    priority: "nearest",         // nearest | lowestHP | first
    boneOffset: { x: 0, y: -0.0004, z: 0 } // Dịch lên đầu (head clamp)
  },

  // ==========================
  // 1. Phát hiện mục tiêu
  // ==========================
  detectTarget(enemies, playerPos) {
    return enemies
      .filter(e => e.isVisible && e.health > 0)
      .sort((a, b) => {
        if (this.config.priority === "nearest") {
          return this.distance(playerPos, a.position) - this.distance(playerPos, b.position)
        } else if (this.config.priority === "lowestHP") {
          return a.health - b.health
        } else {
          return 0
        }
      })
  },

  // ==========================
  // 2. Khóa mục tiêu (Lock-On)
  // ==========================
  lockTarget(target) {
    if (!target) return
    let pos = this.applyHeadClamp(target.position)
    this.aimlockScreenTap(pos)
  },

  // ==========================
  // 3. Tracking (Theo dõi liên tục)
  // ==========================
  updateTargetPosition(target) {
    if (!target) return
    let predicted = this.config.prediction ? this.predictPosition(target) : target.position
    let clamped = this.applyHeadClamp(predicted)
    this.aimlockScreenTap(clamped)
  },

  // ==========================
  // 4. Prediction (dự đoán di chuyển)
  // ==========================
  predictPosition(target) {
    let velocity = target.velocity || {x:0,y:0,z:0}
    return {
      x: target.position.x + velocity.x * 0.1,
      y: target.position.y + velocity.y * 0.1,
      z: target.position.z + velocity.z * 0.1
    }
  },

  // ==========================
  // 5. Clamp vào Head Bone
  // ==========================
  applyHeadClamp(pos) {
    return {
      x: pos.x + this.config.boneOffset.x,
      y: pos.y + this.config.boneOffset.y,
      z: pos.z + this.config.boneOffset.z
    }
  },

  // ==========================
  // 6. Điều khiển chạm màn hình
  // ==========================
  aimlockScreenTap(screenPos) {
    console.log("Crosshair moving to:", screenPos)
  },

  // ==========================
  // 7. Vòng lặp chính Aimlock
  // ==========================
  aimlockLoop(enemies, player) {
    let targets = this.detectTarget(enemies, player.position)
    if (targets.length > 0) {
      let mainTarget = targets[0]

      // Khóa cứng vào head
      this.lockTarget(mainTarget)

      // Theo dõi liên tục
      if (this.config.tracking) {
        this.updateTargetPosition(mainTarget)
      }

      // Auto fire nếu bật
      if (this.config.autoFire) {
        console.log("Auto firing at target!")
      }
    }
  },

  // ==========================
  // Helper: Tính khoảng cách
  // ==========================
  distance(a, b) {
    return Math.sqrt(
      (a.x - b.x) ** 2 +
      (a.y - b.y) ** 2 +
      (a.z - b.z) ** 2
    )
  }
}


// =======================
// AIMNECK CONFIG MODULE
// =======================
const AimNeckConfig = {
  name: "AimNeckSystem",
  enabled: true,

  config: {
    sensitivity: 9999.0,         // Độ nhạy di chuyển tâm
    lockSpeed: 9999.0,             // Tốc độ hút tâm (1 = tức thì)
    prediction: true,            // Bật dự đoán vị trí cổ
    tracking: true,              // Theo dõi liên tục
    fov: 360,                    // Góc quét tìm mục tiêu
    autoFire: false,             // Bắn tự động khi lock
    aimBone: "bone_Neck",        // Vùng cổ mặc định
    headAssist: true,            // Nếu kéo lên trên, auto hút vào đầu
    screenTapEnabled: true,      // Điều khiển chạm màn hình
    clamp: { minY: 0, maxY: 0 }, // Giới hạn lock (không vượt quá đầu)

    // Thêm offset để dễ chỉnh từ cổ sang đầu
    boneOffset: { x: 0, y: 0.22, z: 0 } 
  },

  // 1. Phát hiện vị trí cổ
  detectNeckTarget(enemies) {
    return enemies.filter(e => e.isVisible && e.health > 0)
                  .map(e => ({ 
                     enemy: e, 
                     neckPos: this.getBonePosition(e, this.config.aimBone) 
                  }))
  },

  // Giả lập lấy vị trí bone cổ từ nhân vật
  getBonePosition(enemy, bone) {
    let base = enemy.bones && enemy.bones[bone] ? enemy.bones[bone] : enemy.position
    // Áp dụng offset để dễ kéo sang đầu
    return {
      x: base.x + this.config.boneOffset.x,
      y: base.y + this.config.boneOffset.y,
      z: base.z + this.config.boneOffset.z
    }
  },

  // 2. Prediction: dự đoán di chuyển cổ
  predictNeckPosition(target) {
    let velocity = target.enemy.velocity || {x:0,y:0,z:0}
    return {
      x: target.neckPos.x + velocity.x * 0.1,
      y: target.neckPos.y + velocity.y * 0.1,
      z: target.neckPos.z + velocity.z * 0.1
    }
  },

  // 3. Tính toán hướng để nhắm cổ
  calculateAimDirection(playerPos, targetPos) {
    return {
      x: targetPos.x - playerPos.x,
      y: targetPos.y - playerPos.y,
      z: targetPos.z - playerPos.z
    }
  },

  // 4. Điều khiển drag/tap màn hình
  screenTapTo(targetPos) {
    if (this.config.screenTapEnabled) {
      console.log("Screen tap/drag tới:", targetPos)
    }
  },

  // Áp dụng aimlock (dịch chuyển crosshair)
  applyAimLock(direction) {
    console.log("AimLock hướng tới:", direction)
  },

  // 5. Aimneck Loop
  run(player, enemies) {
    if (!this.enabled) return
    let targets = this.detectNeckTarget(enemies)
    if (targets.length === 0) return

    let target = targets[0]
    let lockPos = this.config.prediction ? this.predictNeckPosition(target) : target.neckPos
    
    let dir = this.calculateAimDirection(player.position, lockPos)

    // Giới hạn: không vượt quá đầu
    if (this.config.headAssist) {
      if (dir.y > this.config.clamp.maxY) dir.y = this.config.clamp.maxY
      if (dir.y < this.config.clamp.minY) dir.y = this.config.clamp.minY
    }

    this.applyAimLock(dir)
    this.screenTapTo(lockPos)
  }
}
   
    const FeatherDragHeadLock = {
    enabled: true,
    headBone: "bone_Head",

    sensitivityBoost: 99999.0,   // drag siêu nhẹ (càng cao càng nhạy)
    smoothFactor: 0.0,      // tốc độ hút về đầu (0.1 = chậm, 0.3 = nhanh)
    snapThreshold: 9999.0,     // khoảng cách auto hút hẳn vào đầu
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // vector chênh lệch
        let dx = headPos.x - aimPos.x;
        let dy = headPos.y - aimPos.y;
        let dz = headPos.z - aimPos.z;
        let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // Nếu crosshair lọt vào vùng snap → lock thẳng vào đầu
        if (dist < this.snapThreshold) {
            player.crosshair.position = { ...headPos };
            player.crosshair.lockedBone = this.headBone;
            console.log(`[FeatherDragHeadLock] 🎯 LOCK thẳng vào ${this.headBone}`);
            return;
        }

        // Luôn kéo crosshair nhẹ nhàng hướng về đầu
        player.crosshair.position = {
            x: aimPos.x + dx * this.smoothFactor * this.sensitivityBoost,
            y: aimPos.y + dy * this.smoothFactor * this.sensitivityBoost,
            z: aimPos.z + dz * this.smoothFactor * this.sensitivityBoost
        };

        console.log(`[FeatherDragHeadLock] ✨ Auto hút về ${this.headBone}, dist=${dist.toFixed(3)}`);
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && FeatherDragHeadLock.enabled) {
        FeatherDragHeadLock.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const NoOverHeadDrag = {
    enabled: true,
    headBone: "bone_Head",
    clampYOffset: 0.0,   // cho phép cao hơn đầu bao nhiêu (0 = tuyệt đối không vượt)
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    apply: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        // Nếu y của crosshair cao hơn đầu
        if (aimPos.y > headPos.y + this.clampYOffset) {
            player.crosshair.position = {
                x: aimPos.x,                // giữ X (ngang)
                y: headPos.y + this.clampYOffset, // ghim trần Y tại đầu
                z: aimPos.z                 // giữ Z (sâu)
            };

            console.log(`[NoOverHeadDrag] ⛔ Giới hạn drag, crosshair không vượt quá ${this.headBone}`);
        }
    }
};

// Vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && NoOverHeadDrag.enabled) {
        NoOverHeadDrag.apply(localPlayer, HeadLockAim.currentTarget);
    }
});
    const DragHeadLockStabilizer = {
    enabled: true,
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    lockZone: {
        toleranceX: 0.0,   // độ lệch ngang cho phép khi drag
        toleranceY: 0.0    // độ lệch dọc cho phép khi drag
    },

    stabilize: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);

        let dx = Math.abs(aimPos.x - headPos.x);
        let dy = Math.abs(aimPos.y - headPos.y);

        // Debug log
        console.log(`[DragHeadLockStabilizer] dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}`);

        // Nếu crosshair đang drag trong vùng "hút đầu"
        if (dx < this.lockZone.toleranceX && dy < this.lockZone.toleranceY) {
            // Ghìm tâm ngay tại vị trí đầu
            player.crosshair.position = {
                x: headPos.x,
                y: headPos.y,
                z: headPos.z
            };

            player.crosshair.lockedBone = this.headBone;
            console.log(`[DragHeadLockStabilizer] ✅ GHÌM TẠI ĐẦU (${this.headBone})`);
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && DragHeadLockStabilizer.enabled) {
        DragHeadLockStabilizer.stabilize(localPlayer, HeadLockAim.currentTarget);
    }
});
    const SmartBoneAutoHeadLock = {
    enabled: true,
    mode: "aggressive",   // "normal" | "aggressive"
    triggerBones: [
        "bone_LeftClav",
        "bone_RightClav",
        "bone_Neck",
        "bone_Hips"
    ],
    headBone: "bone_Head",
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    // --- Config mặc định (Normal) ---
    lockTolerance: 0.02,       // vùng hút cơ bản
    maxYOffset: 0.0,         // không lố đầu
    maxRotationDiff: 0.001,     // giới hạn sai lệch góc quay
    maxOffsetDiff: 0.0001,       // giới hạn sai lệch offset

    // --- Config Aggressive Mode ---
    aggressive: {
        lockTolerance: 0.0001,   // rộng hơn, dễ hút hơn
        maxYOffset: 0.0,      // cho phép bù y cao hơn
        maxRotationDiff: 0.001,  // cho phép sai lệch nhiều hơn
        maxOffsetDiff: 0.001     // offset xa vẫn hút
    },

    checkAndLock: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let cfg = (this.mode === "aggressive") ? this.aggressive : this;

        let aimPos = player.crosshair.position;
        let headPos = enemy.getBonePosition(this.headBone);
        let headData = enemy.getBoneData(this.headBone); // {position, rotation}

        for (let bone of this.triggerBones) {
            let bonePos = enemy.getBonePosition(bone);
            let boneData = enemy.getBoneData(bone);

            let offsetDiff = Math.sqrt(
                Math.pow(bonePos.x - headPos.x, 2) +
                Math.pow(bonePos.y - headPos.y, 2) +
                Math.pow(bonePos.z - headPos.z, 2)
            );

            let dot =
                headData.rotation.x * boneData.rotation.x +
                headData.rotation.y * boneData.rotation.y +
                headData.rotation.z * boneData.rotation.z +
                headData.rotation.w * boneData.rotation.w;
            let rotationDiff = 1 - Math.abs(dot);

            let dx = Math.abs(aimPos.x - bonePos.x);
            let dy = Math.abs(aimPos.y - bonePos.y);

            // Debug
            console.log(`[SmartBoneAutoHeadLock][${this.mode}] bone=${bone}, dx=${dx.toFixed(4)}, dy=${dy.toFixed(4)}, offsetDiff=${offsetDiff.toFixed(4)}, rotationDiff=${rotationDiff.toFixed(4)}`);

            if (
                dx < cfg.lockTolerance &&
                dy < cfg.lockTolerance &&
                offsetDiff < cfg.maxOffsetDiff &&
                rotationDiff < cfg.maxRotationDiff
            ) {
                let clampedY = Math.min(headPos.y, aimPos.y + cfg.maxYOffset);

                player.crosshair.position = {
                    x: headPos.x,
                    y: clampedY,
                    z: headPos.z
                };

                player.crosshair.lockedBone = this.headBone;
                console.log(`[SmartBoneAutoHeadLock][${this.mode}] ✅ LOCKED to ${this.headBone} (triggered by ${bone})`);
                return;
            }
        }
    }
};

// vòng lặp update
Game.on("update", () => {
    if (localPlayer.isDragging && SmartBoneAutoHeadLock.enabled) {
        SmartBoneAutoHeadLock.checkAndLock(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockClamp = {
    enabled: true,
    targetBone: "Head",
    maxYOffset: 0.0,   // Giới hạn lệch lên trên đầu (mét) - càng nhỏ càng khít
boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },
        rotationOffset: { x: 0.0258174837, y: -0.08611039, z: -0.1402113, w: 0.9860321 },
        scale: { x: 1.0, y: 1.0, z: 1.0 },
    clampAim: function(player, enemy) {
        if (!this.enabled || !enemy || !enemy.isAlive) return;

        let headPos = enemy.getBonePosition(this.targetBone);
        let aimPos = player.crosshair.position;

        // Nếu crosshair vượt quá đỉnh đầu (trên trục Y)
        if (aimPos.y > headPos.y + this.maxYOffset) {
            aimPos.y = headPos.y + this.maxYOffset;
        }

        // Cập nhật lại crosshair
        player.crosshair.position = aimPos;
    }
};

// Gắn vào loop game
Game.on("update", () => {
    if (localPlayer.isDragging && HeadLockAim.currentTarget) {
        HeadLockClamp.clampAim(localPlayer, HeadLockAim.currentTarget);
    }
});
    const HeadLockAim = {
    enabled: true,
    targetBone: "Head",
    lockSpeed: 1.0, // 1.0 = khóa tức thì, 0.5 = mượt hơn
    fovLimit: 360,    // Chỉ khóa nếu mục tiêu trong FOV này (độ)
    currentTarget: null,

    update: function(player, enemies) {
        if (!this.enabled) return;

        if (player.isFiring) {
            // Nếu chưa có target hoặc target chết → tìm mới
            if (!this.currentTarget || !this.currentTarget.isAlive) {
                this.currentTarget = this.findTarget(player, enemies);
            }
            if (this.currentTarget) {
                this.lockToHead(player, this.currentTarget);
            }
        } else {
            // Ngừng bắn → bỏ lock
            this.currentTarget = null;
        }
    },

    findTarget: function(player, enemies) {
        let bestEnemy = null;
        let minAngle = this.fovLimit;

        let camDir = player.camera.direction;
        let camPos = player.camera.position;

        for (let e of enemies) {
            if (!e.isAlive) continue;

            let headPos = e.getBonePosition(this.targetBone);
            let dir = headPos.subtract(camPos).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);

            if (angle < minAngle) {
                minAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    },

    lockToHead: function(player, enemy) {
        let headPos = enemy.getBonePosition(this.targetBone);
        let aimDir = headPos.subtract(player.camera.position).normalize();

        // Lerp để có thể mượt hoặc khóa cứng tùy lockSpeed
        player.camera.direction = Vector3.lerp(
            player.camera.direction,
            aimDir,
            this.lockSpeed
        );
    }
};

// Gắn vào game loop
Game.on("update", () => {
    HeadLockAim.update(localPlayer, visibleEnemies);
});
    const HipAssistAim = {
    enabled: true,
    hipBoneName: "Hips",
    headBoneName: "Head",
    hipOffset: { x: -0.05334, y: -0.00351, z: -0.00076 }, // Offset hips
    hipSensitivityBoost: 20.5, // Độ nhạy khi ở vùng hông
    normalSensitivity: 6.0,
    hipDistanceThreshold: 0.001, // Khoảng cách crosshair-hips để kích hoạt

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        let target = this.getClosestEnemy(player, enemies);
        if (!target) return;

        // Lấy vị trí hips và head
        let hipPos = target.getBonePosition(this.hipBoneName);
        hipPos.x += this.hipOffset.x;
        hipPos.y += this.hipOffset.y;
        hipPos.z += this.hipOffset.z;

        let headPos = target.getBonePosition(this.headBoneName);

        // Khoảng cách crosshair tới hips
        let distToHips = Vector3.distance(player.crosshair.worldPos, hipPos);

        // Nếu gần hips → tăng nhạy để kéo nhanh lên head
        if (distToHips <= this.hipDistanceThreshold) {
            player.aimSensitivity = this.hipSensitivityBoost;
        } else {
            player.aimSensitivity = this.normalSensitivity;
        }

        // Nếu đang kéo → auto hướng về head
        if (player.isDragging) {
            let aimDir = headPos.subtract(player.camera.position).normalize();
            player.camera.direction = Vector3.lerp(
                player.camera.direction,
                aimDir,
                player.aimSensitivity * Game.deltaTime
            );
        }
    },

    getClosestEnemy: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestEnemy = null;
        let bestAngle = 10; // Giới hạn góc
        for (let e of enemies) {
            let headPos = e.getBonePosition(this.headBoneName);
            let dir = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dir) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestEnemy = e;
            }
        }
        return bestEnemy;
    }
};

// Chạy vòng lặp
Game.on("update", () => {
    HipAssistAim.update(localPlayer, visibleEnemies);
});
    const FullAutoAimDragLock = {
    enabled: true,
    fov: 180, // Góc tìm mục tiêu
    dragSpeed: 5.5, // Tốc độ kéo về đầu
    hardLockDistance: 0.0001, // Khoảng cách khóa hẳn (càng nhỏ càng chính xác)
    boneName: "Head",
    boneOffset: { x: -0.0457, y: -0.00448, z: -0.02004 },

    update: function(player, enemies) {
        if (!this.enabled || enemies.length === 0) return;

        // Tìm mục tiêu gần nhất trong FOV
        let target = this.getClosestTargetInFOV(player, enemies);
        if (!target) return;

        // Lấy vị trí bone head + offset
        let headPos = target.getBonePosition(this.boneName);
        headPos.x += this.boneOffset.x;
        headPos.y += this.boneOffset.y;
        headPos.z += this.boneOffset.z;

        // Tính vector aim
        let aimVec = headPos.subtract(player.camera.position);
        let dist = aimVec.magnitude();

        if (dist <= this.hardLockDistance) {
            // Hard lock ngay lập tức
            player.camera.lookAt(headPos, 0.0);
        } else {
            // Auto drag về phía head
            let dragVec = aimVec.normalize().scale(this.dragSpeed * Game.deltaTime);
            player.camera.direction = player.camera.direction.add(dragVec).normalize();
        }
    },

    getClosestTargetInFOV: function(player, enemies) {
        let camDir = player.camera.direction;
        let bestTarget = null;
        let bestAngle = this.fov;

        enemies.forEach(enemy => {
            let headPos = enemy.getBonePosition(this.boneName);
            let dirToEnemy = headPos.subtract(player.camera.position).normalize();
            let angle = camDir.angleTo(dirToEnemy) * (180 / Math.PI);
            if (angle < bestAngle) {
                bestAngle = angle;
                bestTarget = enemy;
            }
        });
        return bestTarget;
    }
};

// Chạy vòng lặp auto aim
Game.on("update", () => {
    FullAutoAimDragLock.update(localPlayer, visibleEnemies);
});
    const AimSnapToHead = {
    enabled: true,
    snapOnDrag: true,
    fovLock: 360, // 360° => bất kỳ hướng nào
    lockSmooth: 0.0, // 0 = khóa ngay lập tức

    boneOffset: { x: -0.0456970781, y: -0.004478302, z: -0.0200432576 },

    update: function(player, enemy, isDragging) {
        if (!this.enabled || !enemy) return;

        if (this.snapOnDrag && isDragging) {
            // Lấy vị trí bone head của enemy
            const headPos = enemy.getBonePosition("Head");

            // Cộng offset để chỉnh chuẩn vào giữa đầu
            headPos.x += this.boneOffset.x;
            headPos.y += this.boneOffset.y;
            headPos.z += this.boneOffset.z;

            // Tính hướng từ tâm ngắm tới đầu
            const aimDirection = headPos.subtract(player.camera.position);

            // Xoay camera ngay lập tức về hướng head
            player.camera.lookAt(headPos, this.lockSmooth);
        }
    }
};

// Vòng lặp update trong game
Game.on("update", () => {
    AimSnapToHead.update(localPlayer, currentTarget, Input.isDragging());
});
    // Mặc định: đi thẳng, không proxy
    return "DIRECT";
}
