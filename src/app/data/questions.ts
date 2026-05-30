export interface Question {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'veryhard';
  points: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  // Easy Level (+2 points)
  {
    id: 'easy-1',
    difficulty: 'easy',
    points: 2,
    question: 'What is the meaning of coordination number?',
    options: [
      'Number of metal atoms',
      'Number of donor atoms bonded to the central metal',
      'Number of valence electrons',
      'Number of charges in a complex'
    ],
    correctAnswer: 1
  },
  {
    id: 'easy-2',
    difficulty: 'easy',
    points: 2,
    question: 'The geometry of a coordination number 2 complex is:',
    options: ['Tetrahedral', 'Octahedral', 'Linear', 'Square planar'],
    correctAnswer: 2
  },
  {
    id: 'easy-3',
    difficulty: 'easy',
    points: 2,
    question: 'Which complex has a tetrahedral geometry?',
    options: [
      '[PtCl₂(NH₃)₂]',
      '[Ni(CO)₄]',
      '[Co(NH₃)₄Cl₂]⁺',
      '[CuCl₅]³⁻'
    ],
    correctAnswer: 1
  },
  {
    id: 'easy-4',
    difficulty: 'easy',
    points: 2,
    question: 'Cis-trans isomerism is a type of:',
    options: [
      'Linkage isomerism',
      'Hydration isomerism',
      'Geometrical isomerism',
      'Ionization isomerism'
    ],
    correctAnswer: 2
  },
  {
    id: 'easy-5',
    difficulty: 'easy',
    points: 2,
    question: 'In linkage isomerism, isomers are formed because:',
    options: [
      'Water molecules exchange with counter ions',
      'Different spatial arrangements occur',
      'Ligands exchange between complexes',
      'Ambidentate ligands bond through different atoms'
    ],
    correctAnswer: 3
  },
  {
    id: 'easy-6',
    difficulty: 'easy',
    points: 2,
    question: 'A common geometry for coordination number 6 is:',
    options: [
      'Linear',
      'Octahedral',
      'Square planar',
      'Pentagonal bipyramidal'
    ],
    correctAnswer: 1
  },
  {
    id: 'easy-7',
    difficulty: 'easy',
    points: 2,
    question: 'Optical isomers can:',
    options: [
      'Have different melting points',
      'Not form mirror images',
      'Rotate plane-polarized light',
      'Change coordination number'
    ],
    correctAnswer: 2
  },
  {
    id: 'easy-8',
    difficulty: 'easy',
    points: 2,
    question: 'Square planar complexes with formula [MX₂Y₂] show:',
    options: [
      'fac and mer isomerism',
      'cis and trans isomerism',
      'linkage isomerism',
      'coordination isomerism'
    ],
    correctAnswer: 1
  },

  // Medium Level (+3 points)
  {
    id: 'medium-1',
    difficulty: 'medium',
    points: 3,
    question: 'The complex [Co(NH₃)₄Cl₂]⁺ can exhibit:',
    options: [
      'Optical isomerism only',
      'Geometrical isomerism only',
      'Linkage isomerism only',
      'Coordination isomerism only'
    ],
    correctAnswer: 1
  },
  {
    id: 'medium-2',
    difficulty: 'medium',
    points: 3,
    question: 'Which of the following is a square planar complex?',
    options: [
      '[Ni(CO)₄]',
      '[CuCl₅]³⁻',
      '[PdCl₄]²⁻',
      '[XeF₅]⁻'
    ],
    correctAnswer: 2
  },
  {
    id: 'medium-3',
    difficulty: 'medium',
    points: 3,
    question: 'fac and mer isomerism are commonly found in:',
    options: [
      '[MX₂Y₂]',
      '[MX₄Y₂]',
      '[MX₃Y₃]',
      '[MXY₂Z]'
    ],
    correctAnswer: 2
  },
  {
    id: 'medium-4',
    difficulty: 'medium',
    points: 3,
    question: 'A complex is optically active when it:',
    options: [
      'Has a positive charge',
      'Contains monodentate ligands only',
      'Has no internal mirror plane',
      'Has coordination number 6'
    ],
    correctAnswer: 2
  },
  {
    id: 'medium-5',
    difficulty: 'medium',
    points: 3,
    question: 'Complexes with coordination number 5 may have:',
    options: [
      'Trigonal bipyramidal geometry',
      'Square pyramidal geometry',
      'Pentagonal planar geometry',
      'All of the above'
    ],
    correctAnswer: 3
  },
  {
    id: 'medium-6',
    difficulty: 'medium',
    points: 3,
    question: 'Hydration isomerism occurs when:',
    options: [
      'Donor atoms change',
      'H₂O exchanges between coordination sphere and counter ion',
      'Ambidentate ligands change bonding atoms',
      'Spatial arrangement changes'
    ],
    correctAnswer: 1
  },
  {
    id: 'medium-7',
    difficulty: 'medium',
    points: 3,
    question: 'Which statement describes a chiral compound?',
    options: [
      'It has an internal mirror plane',
      'It cannot rotate plane-polarized light',
      'It has a non-superimposable mirror image',
      'It must be tetrahedral'
    ],
    correctAnswer: 2
  },

  // Hard Level (+4 points)
  {
    id: 'hard-1',
    difficulty: 'hard',
    points: 4,
    question: 'Which complex can exhibit both geometrical and optical isomerism?',
    options: [
      '[PtCl₂(NH₃)₂]',
      '[Co(NH₃)₄Cl₂]⁺',
      '[Cr(en)₂Cl₂]⁺',
      '[Ni(CO)₄]'
    ],
    correctAnswer: 2
  },
  {
    id: 'hard-2',
    difficulty: 'hard',
    points: 4,
    question: 'Which statement about fac and mer isomers is CORRECT?',
    options: [
      'fac-isomer has three identical ligands in one plane',
      'mer-isomer has three identical ligands occupying one triangular face',
      'fac and mer isomerism occur only in tetrahedral complexes',
      'mer-isomer has three identical ligands arranged in a plane through the metal center'
    ],
    correctAnswer: 3
  },
  {
    id: 'hard-3',
    difficulty: 'hard',
    points: 4,
    question: 'Which complex is most likely to form cis-trans isomers?',
    options: [
      '[Ni(CO)₄]',
      '[Pt(NH₃)₂Cl₂]',
      '[Ag(NH₃)₂]⁺',
      '[Au(CN)₂]⁻'
    ],
    correctAnswer: 1
  },
  {
    id: 'hard-4',
    difficulty: 'hard',
    points: 4,
    question: 'Linkage isomerism is shown by ligands such as:',
    options: ['NH₃', 'H₂O', 'NO₂⁻', 'Cl⁻'],
    correctAnswer: 2
  },
  {
    id: 'hard-5',
    difficulty: 'hard',
    points: 4,
    question: 'Which of the following complexes is expected to have octahedral geometry?',
    options: [
      '[CuCl₅]³⁻',
      '[PdCl₄]²⁻',
      '[Co(NH₃)₆]³⁺',
      '[Ni(CO)₄]'
    ],
    correctAnswer: 2
  },
  {
    id: 'hard-6',
    difficulty: 'hard',
    points: 4,
    question: 'The coordination number of [Cr(en)₂Cl₂]⁺ is:',
    options: ['2', '4', '5', '6'],
    correctAnswer: 3
  },
  {
    id: 'hard-7',
    difficulty: 'hard',
    points: 4,
    question: 'Which statement about optical isomers is FALSE?',
    options: [
      'They rotate plane-polarized light',
      'They are non-superimposable mirror images',
      'They have different boiling points',
      'They may exist in octahedral complexes'
    ],
    correctAnswer: 2
  },
  {
    id: 'hard-8',
    difficulty: 'hard',
    points: 4,
    question: 'Which geometry is commonly associated with d⁸ metal ions such as Pt(II)?',
    options: [
      'Linear',
      'Tetrahedral',
      'Square planar',
      'Trigonal bipyramidal'
    ],
    correctAnswer: 2
  },

  // Very Hard Level (+5 points)
  {
    id: 'veryhard-1',
    difficulty: 'veryhard',
    points: 5,
    question: 'Which complex can exist as fac and mer isomers but NOT cis-trans isomers?',
    options: [
      '[MX₂Y₂]',
      '[MX₄Y₂]',
      '[MX₃Y₃]',
      '[MXY₂Z]'
    ],
    correctAnswer: 2
  },
  {
    id: 'veryhard-2',
    difficulty: 'veryhard',
    points: 5,
    question: 'Which of the following complexes is optically inactive due to the presence of an internal mirror plane?',
    options: [
      'cis-[Cr(en)₂Cl₂]⁺',
      'trans-[Cr(en)₂Cl₂]⁺',
      'fac-[Co(NH₃)₃Cl₃]',
      'mer-[Co(NH₃)₃Cl₃]'
    ],
    correctAnswer: 1
  },
  {
    id: 'veryhard-3',
    difficulty: 'veryhard',
    points: 5,
    question: 'A coordination compound shows ionization isomerism if:',
    options: [
      'Ligands exchange bonding atoms',
      'Water molecules move into the coordination sphere',
      'Counter ions and coordinated anions interchange positions',
      'The geometry changes from cis to trans'
    ],
    correctAnswer: 2
  },
  {
    id: 'veryhard-4',
    difficulty: 'veryhard',
    points: 5,
    question: 'Which pair represents linkage isomers?',
    options: [
      '[Co(NH₃)₅(NO₂)]²⁺ and [Co(NH₃)₅(ONO)]²⁺',
      'cis-[Pt(NH₃)₂Cl₂] and trans-[Pt(NH₃)₂Cl₂]',
      '[Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O',
      'fac-[Co(NH₃)₃Cl₃] and mer-[Co(NH₃)₃Cl₃]'
    ],
    correctAnswer: 0
  },
  {
    id: 'veryhard-5',
    difficulty: 'veryhard',
    points: 5,
    question: 'Which complex is LEAST likely to exhibit geometrical isomerism?',
    options: [
      '[PtCl₂(NH₃)₂]',
      '[Co(NH₃)₄Cl₂]⁺',
      '[Ni(CN)₅]³⁻',
      '[Ni(CO)₄]'
    ],
    correctAnswer: 3
  },
  {
    id: 'veryhard-6',
    difficulty: 'veryhard',
    points: 5,
    question: 'The number of possible geometrical isomers for an octahedral complex [MA₃B₃] is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1
  },
  {
    id: 'veryhard-7',
    difficulty: 'veryhard',
    points: 5,
    question: 'Which statement correctly explains why tetrahedral complexes rarely show geometrical isomerism?',
    options: [
      'All ligands occupy equivalent positions',
      'Tetrahedral complexes are always chiral',
      'Tetrahedral complexes contain only monodentate ligands',
      'Tetrahedral geometry prevents ligand bonding'
    ],
    correctAnswer: 0
  }
];
