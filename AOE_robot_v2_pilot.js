/************************* 
 * Ao_Human_V_Robot *
 *************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'AO_human_v_robot';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
blockCounter += 1;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const loopLoaderLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopLoaderLoopBegin(loopLoaderLoopScheduler));
flowScheduler.add(loopLoaderLoopScheduler);
flowScheduler.add(loopLoaderLoopEnd);


flowScheduler.add(welcomeScreenRoutineBegin());
flowScheduler.add(welcomeScreenRoutineEachFrame());
flowScheduler.add(welcomeScreenRoutineEnd());
const loopBlockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopBlockLoopBegin(loopBlockLoopScheduler));
flowScheduler.add(loopBlockLoopScheduler);
flowScheduler.add(loopBlockLoopEnd);














flowScheduler.add(endExperimentRoutineBegin());
flowScheduler.add(endExperimentRoutineEachFrame());
flowScheduler.add(endExperimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'trial_files/AOE_final_randomized_trials.xlsx', 'path': 'trial_files/AOE_final_randomized_trials.xlsx'},
    {'name': './stimuli/bi_0.mov', 'path': './stimuli/bi_0.mov'},
    {'name': './stimuli/left_intransitive_2.mov', 'path': './stimuli/left_intransitive_2.mov'},
    {'name': './stimuli/left_intransitive_1.mov', 'path': './stimuli/left_intransitive_1.mov'},
    {'name': './stimuli/right_transitive_0.mov', 'path': './stimuli/right_transitive_0.mov'},
    {'name': './stimuli/right_intransitive_1.mov', 'path': './stimuli/right_intransitive_1.mov'},
    {'name': './stimuli/right_intransitive_0.mov', 'path': './stimuli/right_intransitive_0.mov'},
    {'name': './stimuli/right_intransitive_3.mov', 'path': './stimuli/right_intransitive_3.mov'},
    {'name': './stimuli/right_transitive_2.mov', 'path': './stimuli/right_transitive_2.mov'},
    {'name': './stimuli/left_intransitive_3.mov', 'path': './stimuli/left_intransitive_3.mov'},
    {'name': './stimuli/bi_1.mov', 'path': './stimuli/bi_1.mov'},
    {'name': './stimuli/bi_2.mov', 'path': './stimuli/bi_2.mov'},
    {'name': './stimuli/bi_3.mov', 'path': './stimuli/bi_3.mov'},
    {'name': './stimuli/right_transitive_1.mov', 'path': './stimuli/right_transitive_1.mov'},
    {'name': './stimuli/left_transitive_1.mov', 'path': './stimuli/left_transitive_1.mov'},
    {'name': './stimuli/right_intransitive_2.mov', 'path': './stimuli/right_intransitive_2.mov'},
    {'name': './stimuli/left_intransitive_0.mov', 'path': './stimuli/left_intransitive_0.mov'},
    {'name': './stimuli/left_transitive_2.mov', 'path': './stimuli/left_transitive_2.mov'},
    {'name': './stimuli/left_transitive_0.mov', 'path': './stimuli/left_transitive_0.mov'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var stimLoaderClock;
var welcomeScreenClock;
var textWelcome;
var keyWelcome;
var blockSetupClock;
var breakPeriodClock;
var textBreak;
var textBreakCD;
var prog;
var textProg;
var skipBreak;
var interTrialIntervalClock;
var skipITI;
var fixationCrossClock;
var crossFixation;
var stimVidClock;
var counterStim;
var stimMovieClock;
var stimMovie;
var skipStim;
var executionPhaseClock;
var executionCircle;
var postStimIntervalClock;
var endBlockClock;
var endExperimentClock;
var textEnd;
var keyQuit;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "stimLoader"
  stimLoaderClock = new util.Clock();
  // Initialize components for Routine "welcomeScreen"
  welcomeScreenClock = new util.Clock();
  textWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcome',
    text: 'Welcome!\n\nPress Space to start the experiment',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  keyWelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blockSetup"
  blockSetupClock = new util.Clock();
  // Initialize components for Routine "breakPeriod"
  breakPeriodClock = new util.Clock();
  textBreak = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBreak',
    text: "Let's have 15-second break.\n\nAfter this break, focus on the white cross at the center.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  textBreakCD = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBreakCD',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  prog = new visual.Progress({
      win: psychoJS.window, name: 'prog',
      progress: 0.0,
      pos: [(- 0.3), (- 0.25)], size: [0.6, 0.1], anchor: 'center left', units: 'height',
      barColor: 'white', backColor: null, borderColor: 'white', colorSpace: 'rgb',
      lineWidth: 4.0, opacity: 1.0, ori: 0.0,
      depth: -3
  })
  textProg = new visual.TextStim({
    win: psychoJS.window,
    name: 'textProg',
    text: 'Your progress',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  skipBreak = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "interTrialInterval"
  interTrialIntervalClock = new util.Clock();
  skipITI = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixationCross"
  fixationCrossClock = new util.Clock();
  crossFixation = new visual.ShapeStim ({
    win: psychoJS.window, name: 'crossFixation', 
    vertices: 'cross', size:[0.1, 0.1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "stimVid"
  stimVidClock = new util.Clock();
  // Run 'Begin Experiment' code from codeStim
  counterStim = 0;
  
  stimMovieClock = new util.Clock();
  stimMovie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'stimMovie',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1.125, 0.63],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: true,
    depth: -1
    });
  skipStim = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "executionPhase"
  executionPhaseClock = new util.Clock();
  executionCircle = new visual.ShapeStim ({
    win: psychoJS.window, name: 'executionCircle', 
    vertices: [[-[0.25, 0.25][0]/2.0, -[0.25, 0.25][1]/2.0], [+[0.25, 0.25][0]/2.0, -[0.25, 0.25][1]/2.0], [0, [0.25, 0.25][1]/2.0]],
    ori: 90.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "postStimInterval"
  postStimIntervalClock = new util.Clock();
  // Initialize components for Routine "endBlock"
  endBlockClock = new util.Clock();
  // Initialize components for Routine "endExperiment"
  endExperimentClock = new util.Clock();
  textEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEnd',
    text: 'This is the end of the experiment.\n\nThank you for your effort and attention!\n\nPress Space to quit.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyQuit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var loopLoader;
function loopLoaderLoopBegin(loopLoaderLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopLoader = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_files/AOE_final_randomized_trials.xlsx',
      seed: undefined, name: 'loopLoader'
    });
    psychoJS.experiment.addLoop(loopLoader); // add the loop to the experiment
    currentLoop = loopLoader;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoopLoader of loopLoader) {
      snapshot = loopLoader.getSnapshot();
      loopLoaderLoopScheduler.add(importConditions(snapshot));
      loopLoaderLoopScheduler.add(stimLoaderRoutineBegin(snapshot));
      loopLoaderLoopScheduler.add(stimLoaderRoutineEachFrame());
      loopLoaderLoopScheduler.add(stimLoaderRoutineEnd(snapshot));
      loopLoaderLoopScheduler.add(loopLoaderLoopEndIteration(loopLoaderLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loopLoaderLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loopLoader);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopLoaderLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loopBlock;
function loopBlockLoopBegin(loopBlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: N_block, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loopBlock'
    });
    psychoJS.experiment.addLoop(loopBlock); // add the loop to the experiment
    currentLoop = loopBlock;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoopBlock of loopBlock) {
      snapshot = loopBlock.getSnapshot();
      loopBlockLoopScheduler.add(importConditions(snapshot));
      loopBlockLoopScheduler.add(blockSetupRoutineBegin(snapshot));
      loopBlockLoopScheduler.add(blockSetupRoutineEachFrame());
      loopBlockLoopScheduler.add(blockSetupRoutineEnd(snapshot));
      const loopBreakCDLoopScheduler = new Scheduler(psychoJS);
      loopBlockLoopScheduler.add(loopBreakCDLoopBegin(loopBreakCDLoopScheduler, snapshot));
      loopBlockLoopScheduler.add(loopBreakCDLoopScheduler);
      loopBlockLoopScheduler.add(loopBreakCDLoopEnd);
      const loopTrialLoopScheduler = new Scheduler(psychoJS);
      loopBlockLoopScheduler.add(loopTrialLoopBegin(loopTrialLoopScheduler, snapshot));
      loopBlockLoopScheduler.add(loopTrialLoopScheduler);
      loopBlockLoopScheduler.add(loopTrialLoopEnd);
      loopBlockLoopScheduler.add(endBlockRoutineBegin(snapshot));
      loopBlockLoopScheduler.add(endBlockRoutineEachFrame());
      loopBlockLoopScheduler.add(endBlockRoutineEnd(snapshot));
      loopBlockLoopScheduler.add(loopBlockLoopEndIteration(loopBlockLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var loopBreakCD;
function loopBreakCDLoopBegin(loopBreakCDLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopBreakCD = new TrialHandler({
      psychoJS: psychoJS,
      nReps: breakLength, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loopBreakCD'
    });
    psychoJS.experiment.addLoop(loopBreakCD); // add the loop to the experiment
    currentLoop = loopBreakCD;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoopBreakCD of loopBreakCD) {
      snapshot = loopBreakCD.getSnapshot();
      loopBreakCDLoopScheduler.add(importConditions(snapshot));
      loopBreakCDLoopScheduler.add(breakPeriodRoutineBegin(snapshot));
      loopBreakCDLoopScheduler.add(breakPeriodRoutineEachFrame());
      loopBreakCDLoopScheduler.add(breakPeriodRoutineEnd(snapshot));
      loopBreakCDLoopScheduler.add(loopBreakCDLoopEndIteration(loopBreakCDLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loopBreakCDLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loopBreakCD);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopBreakCDLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loopTrial;
function loopTrialLoopBegin(loopTrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loopTrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: N_trial, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loopTrial'
    });
    psychoJS.experiment.addLoop(loopTrial); // add the loop to the experiment
    currentLoop = loopTrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoopTrial of loopTrial) {
      snapshot = loopTrial.getSnapshot();
      loopTrialLoopScheduler.add(importConditions(snapshot));
      loopTrialLoopScheduler.add(interTrialIntervalRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(interTrialIntervalRoutineEachFrame());
      loopTrialLoopScheduler.add(interTrialIntervalRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(fixationCrossRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(fixationCrossRoutineEachFrame());
      loopTrialLoopScheduler.add(fixationCrossRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(stimVidRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(stimVidRoutineEachFrame());
      loopTrialLoopScheduler.add(stimVidRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(fixationCrossRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(fixationCrossRoutineEachFrame());
      loopTrialLoopScheduler.add(fixationCrossRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(executionPhaseRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(executionPhaseRoutineEachFrame());
      loopTrialLoopScheduler.add(executionPhaseRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(postStimIntervalRoutineBegin(snapshot));
      loopTrialLoopScheduler.add(postStimIntervalRoutineEachFrame());
      loopTrialLoopScheduler.add(postStimIntervalRoutineEnd(snapshot));
      loopTrialLoopScheduler.add(loopTrialLoopEndIteration(loopTrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loopTrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loopTrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopTrialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function loopBlockLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loopBlock);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopBlockLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var stimLoaderComponents;
function stimLoaderRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimLoader' ---
    t = 0;
    stimLoaderClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('stimLoader.started', globalClock.getTime());
    // keep track of which components have finished
    stimLoaderComponents = [];
    
    for (const thisComponent of stimLoaderComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimLoaderRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimLoader' ---
    // get current time
    t = stimLoaderClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimLoaderComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimLoaderRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimLoader' ---
    for (const thisComponent of stimLoaderComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimLoader.stopped', globalClock.getTime());
    // the Routine "stimLoader" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyWelcome_allKeys;
var welcomeScreenComponents;
function welcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcomeScreen' ---
    t = 0;
    welcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcomeScreen.started', globalClock.getTime());
    keyWelcome.keys = undefined;
    keyWelcome.rt = undefined;
    _keyWelcome_allKeys = [];
    // keep track of which components have finished
    welcomeScreenComponents = [];
    welcomeScreenComponents.push(textWelcome);
    welcomeScreenComponents.push(keyWelcome);
    
    for (const thisComponent of welcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcomeScreen' ---
    // get current time
    t = welcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcome* updates
    if (t >= 0.0 && textWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcome.tStart = t;  // (not accounting for frame time here)
      textWelcome.frameNStart = frameN;  // exact frame index
      
      textWelcome.setAutoDraw(true);
    }
    
    
    // *keyWelcome* updates
    if (t >= 0.0 && keyWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyWelcome.tStart = t;  // (not accounting for frame time here)
      keyWelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyWelcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyWelcome.clearEvents(); });
    }
    
    if (keyWelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyWelcome.getKeys({keyList: ['space'], waitRelease: false});
      _keyWelcome_allKeys = _keyWelcome_allKeys.concat(theseKeys);
      if (_keyWelcome_allKeys.length > 0) {
        keyWelcome.keys = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].name;  // just the last key pressed
        keyWelcome.rt = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].rt;
        keyWelcome.duration = _keyWelcome_allKeys[_keyWelcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcomeScreen' ---
    for (const thisComponent of welcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcomeScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyWelcome.corr, level);
    }
    psychoJS.experiment.addData('keyWelcome.keys', keyWelcome.keys);
    if (typeof keyWelcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyWelcome.rt', keyWelcome.rt);
        psychoJS.experiment.addData('keyWelcome.duration', keyWelcome.duration);
        routineTimer.reset();
        }
    
    keyWelcome.stop();
    // the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockSetupComponents;
function blockSetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blockSetup' ---
    t = 0;
    blockSetupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('blockSetup.started', globalClock.getTime());
    // keep track of which components have finished
    blockSetupComponents = [];
    
    for (const thisComponent of blockSetupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blockSetupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blockSetup' ---
    // get current time
    t = blockSetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blockSetupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blockSetupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blockSetup' ---
    for (const thisComponent of blockSetupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blockSetup.stopped', globalClock.getTime());
    // the Routine "blockSetup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skipBreak_allKeys;
var breakPeriodComponents;
function breakPeriodRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'breakPeriod' ---
    t = 0;
    breakPeriodClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('breakPeriod.started', globalClock.getTime());
    textBreakCD.setText(breakCD);
    prog.setProgress(progVal);
    skipBreak.keys = undefined;
    skipBreak.rt = undefined;
    _skipBreak_allKeys = [];
    // keep track of which components have finished
    breakPeriodComponents = [];
    breakPeriodComponents.push(textBreak);
    breakPeriodComponents.push(textBreakCD);
    breakPeriodComponents.push(prog);
    breakPeriodComponents.push(textProg);
    breakPeriodComponents.push(skipBreak);
    
    for (const thisComponent of breakPeriodComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function breakPeriodRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'breakPeriod' ---
    // get current time
    t = breakPeriodClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBreak* updates
    if (t >= 0.0 && textBreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBreak.tStart = t;  // (not accounting for frame time here)
      textBreak.frameNStart = frameN;  // exact frame index
      
      textBreak.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBreak.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBreak.setAutoDraw(false);
    }
    
    // *textBreakCD* updates
    if (t >= 0.0 && textBreakCD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBreakCD.tStart = t;  // (not accounting for frame time here)
      textBreakCD.frameNStart = frameN;  // exact frame index
      
      textBreakCD.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBreakCD.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBreakCD.setAutoDraw(false);
    }
    
    // *prog* updates
    if (t >= 0 && prog.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prog.tStart = t;  // (not accounting for frame time here)
      prog.frameNStart = frameN;  // exact frame index
      
      prog.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (prog.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      prog.setAutoDraw(false);
    }
    
    // *textProg* updates
    if (t >= 0.0 && textProg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textProg.tStart = t;  // (not accounting for frame time here)
      textProg.frameNStart = frameN;  // exact frame index
      
      textProg.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textProg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textProg.setAutoDraw(false);
    }
    
    // *skipBreak* updates
    if (t >= 0.0 && skipBreak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skipBreak.tStart = t;  // (not accounting for frame time here)
      skipBreak.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skipBreak.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skipBreak.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skipBreak.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skipBreak.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skipBreak.status = PsychoJS.Status.FINISHED;
        }
      
    if (skipBreak.status === PsychoJS.Status.STARTED) {
      let theseKeys = skipBreak.getKeys({keyList: ['s'], waitRelease: false});
      _skipBreak_allKeys = _skipBreak_allKeys.concat(theseKeys);
      if (_skipBreak_allKeys.length > 0) {
        skipBreak.keys = _skipBreak_allKeys[_skipBreak_allKeys.length - 1].name;  // just the last key pressed
        skipBreak.rt = _skipBreak_allKeys[_skipBreak_allKeys.length - 1].rt;
        skipBreak.duration = _skipBreak_allKeys[_skipBreak_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of breakPeriodComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakPeriodRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'breakPeriod' ---
    for (const thisComponent of breakPeriodComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('breakPeriod.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(skipBreak.corr, level);
    }
    psychoJS.experiment.addData('skipBreak.keys', skipBreak.keys);
    if (typeof skipBreak.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skipBreak.rt', skipBreak.rt);
        psychoJS.experiment.addData('skipBreak.duration', skipBreak.duration);
        routineTimer.reset();
        }
    
    skipBreak.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skipITI_allKeys;
var interTrialIntervalComponents;
function interTrialIntervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'interTrialInterval' ---
    t = 0;
    interTrialIntervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('interTrialInterval.started', globalClock.getTime());
    // Run 'Begin Routine' code from codeITI
    counterStim += 1;
    
    skipITI.keys = undefined;
    skipITI.rt = undefined;
    _skipITI_allKeys = [];
    // keep track of which components have finished
    interTrialIntervalComponents = [];
    interTrialIntervalComponents.push(skipITI);
    
    for (const thisComponent of interTrialIntervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function interTrialIntervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'interTrialInterval' ---
    // get current time
    t = interTrialIntervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *skipITI* updates
    if (t >= 0.0 && skipITI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skipITI.tStart = t;  // (not accounting for frame time here)
      skipITI.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skipITI.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skipITI.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skipITI.clearEvents(); });
    }
    
    frameRemains = 0.0 + itiLen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skipITI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skipITI.status = PsychoJS.Status.FINISHED;
        }
      
    if (skipITI.status === PsychoJS.Status.STARTED) {
      let theseKeys = skipITI.getKeys({keyList: ['s'], waitRelease: false});
      _skipITI_allKeys = _skipITI_allKeys.concat(theseKeys);
      if (_skipITI_allKeys.length > 0) {
        skipITI.keys = _skipITI_allKeys[_skipITI_allKeys.length - 1].name;  // just the last key pressed
        skipITI.rt = _skipITI_allKeys[_skipITI_allKeys.length - 1].rt;
        skipITI.duration = _skipITI_allKeys[_skipITI_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of interTrialIntervalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function interTrialIntervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'interTrialInterval' ---
    for (const thisComponent of interTrialIntervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('interTrialInterval.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(skipITI.corr, level);
    }
    psychoJS.experiment.addData('skipITI.keys', skipITI.keys);
    if (typeof skipITI.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skipITI.rt', skipITI.rt);
        psychoJS.experiment.addData('skipITI.duration', skipITI.duration);
        routineTimer.reset();
        }
    
    skipITI.stop();
    // the Routine "interTrialInterval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixationLen;
var fixationCrossComponents;
function fixationCrossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixationCross' ---
    t = 0;
    fixationCrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixationCross.started', globalClock.getTime());
    // Run 'Begin Routine' code from codeFixation
    fixationLen = util.round(Math.random.uniform(0.35, 0.65), 3);
    
    // keep track of which components have finished
    fixationCrossComponents = [];
    fixationCrossComponents.push(crossFixation);
    
    for (const thisComponent of fixationCrossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationCrossRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixationCross' ---
    // get current time
    t = fixationCrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *crossFixation* updates
    if (t >= 0.0 && crossFixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      crossFixation.tStart = t;  // (not accounting for frame time here)
      crossFixation.frameNStart = frameN;  // exact frame index
      
      crossFixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + fixationLen - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (crossFixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      crossFixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationCrossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationCrossRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixationCross' ---
    for (const thisComponent of fixationCrossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixationCross.stopped', globalClock.getTime());
    // the Routine "fixationCross" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _skipStim_allKeys;
var stimVidComponents;
function stimVidRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimVid' ---
    t = 0;
    stimVidClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('stimVid.started', globalClock.getTime());
    stimMovie.setMovie(stimDirList[counterStim]);
    skipStim.keys = undefined;
    skipStim.rt = undefined;
    _skipStim_allKeys = [];
    // keep track of which components have finished
    stimVidComponents = [];
    stimVidComponents.push(stimMovie);
    stimVidComponents.push(skipStim);
    
    for (const thisComponent of stimVidComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimVidRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimVid' ---
    // get current time
    t = stimVidClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimMovie* updates
    if (t >= 0.0 && stimMovie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimMovie.tStart = t;  // (not accounting for frame time here)
      stimMovie.frameNStart = frameN;  // exact frame index
      
      stimMovie.setAutoDraw(true);
      stimMovie.play();
    }
    
    if (stimMovie.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    
    // *skipStim* updates
    if (t >= 0.0 && skipStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      skipStim.tStart = t;  // (not accounting for frame time here)
      skipStim.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { skipStim.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { skipStim.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { skipStim.clearEvents(); });
    }
    
    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (skipStim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      skipStim.status = PsychoJS.Status.FINISHED;
        }
      
    if (skipStim.status === PsychoJS.Status.STARTED) {
      let theseKeys = skipStim.getKeys({keyList: ['s'], waitRelease: false});
      _skipStim_allKeys = _skipStim_allKeys.concat(theseKeys);
      if (_skipStim_allKeys.length > 0) {
        skipStim.keys = _skipStim_allKeys[_skipStim_allKeys.length - 1].name;  // just the last key pressed
        skipStim.rt = _skipStim_allKeys[_skipStim_allKeys.length - 1].rt;
        skipStim.duration = _skipStim_allKeys[_skipStim_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimVidComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimVidRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stimVid' ---
    for (const thisComponent of stimVidComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stimVid.stopped', globalClock.getTime());
    stimMovie.stop();  // ensure movie has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(skipStim.corr, level);
    }
    psychoJS.experiment.addData('skipStim.keys', skipStim.keys);
    if (typeof skipStim.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('skipStim.rt', skipStim.rt);
        psychoJS.experiment.addData('skipStim.duration', skipStim.duration);
        routineTimer.reset();
        }
    
    skipStim.stop();
    // the Routine "stimVid" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exeMarkerVal;
var executionPhaseComponents;
function executionPhaseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'executionPhase' ---
    t = 0;
    executionPhaseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('executionPhase.started', globalClock.getTime());
    // Run 'Begin Routine' code from codeExe
    exeMarkerVal = (markerValList[counterStim] + 100);
    
    // keep track of which components have finished
    executionPhaseComponents = [];
    executionPhaseComponents.push(executionCircle);
    
    for (const thisComponent of executionPhaseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function executionPhaseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'executionPhase' ---
    // get current time
    t = executionPhaseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *executionCircle* updates
    if (t >= 0.0 && executionCircle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      executionCircle.tStart = t;  // (not accounting for frame time here)
      executionCircle.frameNStart = frameN;  // exact frame index
      
      executionCircle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (executionCircle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      executionCircle.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of executionPhaseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function executionPhaseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'executionPhase' ---
    for (const thisComponent of executionPhaseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('executionPhase.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var postStimIntervalComponents;
function postStimIntervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'postStimInterval' ---
    t = 0;
    postStimIntervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('postStimInterval.started', globalClock.getTime());
    // Run 'Begin Routine' code from codePostStim
    if (((counterStim - 1) < N_trial)) {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    postStimIntervalComponents = [];
    
    for (const thisComponent of postStimIntervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function postStimIntervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'postStimInterval' ---
    // get current time
    t = postStimIntervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of postStimIntervalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function postStimIntervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'postStimInterval' ---
    for (const thisComponent of postStimIntervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('postStimInterval.stopped', globalClock.getTime());
    // the Routine "postStimInterval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endBlockComponents;
function endBlockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endBlock' ---
    t = 0;
    endBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('endBlock.started', globalClock.getTime());
    // keep track of which components have finished
    endBlockComponents = [];
    
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endBlockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endBlock' ---
    // get current time
    t = endBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endBlockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endBlock' ---
    for (const thisComponent of endBlockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endBlock.stopped', globalClock.getTime());
    // the Routine "endBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _keyQuit_allKeys;
var endExperimentComponents;
function endExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endExperiment' ---
    t = 0;
    endExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(15.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('endExperiment.started', globalClock.getTime());
    keyQuit.keys = undefined;
    keyQuit.rt = undefined;
    _keyQuit_allKeys = [];
    // keep track of which components have finished
    endExperimentComponents = [];
    endExperimentComponents.push(textEnd);
    endExperimentComponents.push(keyQuit);
    
    for (const thisComponent of endExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endExperimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endExperiment' ---
    // get current time
    t = endExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEnd* updates
    if (t >= 0.0 && textEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEnd.tStart = t;  // (not accounting for frame time here)
      textEnd.frameNStart = frameN;  // exact frame index
      
      textEnd.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textEnd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textEnd.setAutoDraw(false);
    }
    
    // *keyQuit* updates
    if (t >= 0.0 && keyQuit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyQuit.tStart = t;  // (not accounting for frame time here)
      keyQuit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyQuit.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyQuit.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyQuit.clearEvents(); });
    }
    
    frameRemains = 0.0 + 15 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (keyQuit.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      keyQuit.status = PsychoJS.Status.FINISHED;
        }
      
    if (keyQuit.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyQuit.getKeys({keyList: ['space'], waitRelease: false});
      _keyQuit_allKeys = _keyQuit_allKeys.concat(theseKeys);
      if (_keyQuit_allKeys.length > 0) {
        keyQuit.keys = _keyQuit_allKeys[_keyQuit_allKeys.length - 1].name;  // just the last key pressed
        keyQuit.rt = _keyQuit_allKeys[_keyQuit_allKeys.length - 1].rt;
        keyQuit.duration = _keyQuit_allKeys[_keyQuit_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endExperimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endExperiment' ---
    for (const thisComponent of endExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('endExperiment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyQuit.corr, level);
    }
    psychoJS.experiment.addData('keyQuit.keys', keyQuit.keys);
    if (typeof keyQuit.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyQuit.rt', keyQuit.rt);
        psychoJS.experiment.addData('keyQuit.duration', keyQuit.duration);
        routineTimer.reset();
        }
    
    keyQuit.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
