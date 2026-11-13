# Archive

Composants retirés du site mais conservés pour pouvoir être remis en ligne.
Ils ne sont pas compilés : rien ne les importe, Vite ne les inclut pas au bundle.

## Formation (`Training.tsx` + `EnrollmentModal.tsx`)

Retiré le 2026-11-13. Le bloc « Formation Exclusive » et son formulaire
d'inscription forment une seule fonctionnalité : `Training` est le seul
déclencheur de `EnrollmentModal`, donc les deux se restaurent ensemble.

Pour le remettre en ligne :

1. `git mv archive/Training.tsx components/Training.tsx`
2. `git mv archive/EnrollmentModal.tsx components/EnrollmentModal.tsx`
3. Dans `App.tsx` : réimporter les deux composants, rétablir l'état
   `isEnrollmentOpen` et son `openEnrollment`, replacer `<Training
   onOpenEnroll={openEnrollment} />` entre `<Timeline />` et `<FAQ />`, et
   remonter `<EnrollmentModal …/>` à côté des autres modales.
4. Réexporter les deux dans `components/index.ts`.

`EnrollmentModal` poste vers le webhook Zapier `NOTIFICATION_WEBHOOK_URL`,
qui relaie la demande par e-mail. Ce webhook reste actif : la politique de
confidentialité décrit toujours ce traitement, inutile de la modifier au
retour du bloc.
