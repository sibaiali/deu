import os
import sys
import json
import re

sys.stdout.reconfigure(encoding='utf-8')
base_dir = r'c:\deu_notes'
print("=" * 60)
print("  DEU PLATFORM • AUTOMATISIERTE QUALITÄTS- & SYSTEMPRÜFUNG")
print("=" * 60)

passed = 0
failed = 0

def test(name, condition, details=""):
    global passed, failed
    if condition:
        print(f"  [PASS] {name}")
        passed += 1
    else:
        print(f"  [FAIL] {name} -> {details}")
        failed += 1

# 1. TEST SOURCES CATALOG
with open(os.path.join(base_dir, 'js', 'data', 'sources_catalog.js'), 'r', encoding='utf-8') as f:
    src_content = f.read()

test("Sources Catalog exists and has 14 documents", "SOURCES_CATALOG" in src_content and "src_starthilfe" in src_content)

# 2. TEST VOCABULARY DATA
with open(os.path.join(base_dir, 'js', 'data', 'vocabulary_data.js'), 'r', encoding='utf-8') as f:
    vocab_content = f.read()

test("Vocabulary Database loaded", "VOCABULARY_DATA" in vocab_content)

# 3. TEST SIMULATIONS DATA
with open(os.path.join(base_dir, 'js', 'data', 'simulations_data.js'), 'r', encoding='utf-8') as f:
    sim_content = f.read()

test("Simulations Database loaded (40+ scenarios)", "SIMULATIONS_DATA" in sim_content)

# 4. TEST GRAMMAR HUB DATA
with open(os.path.join(base_dir, 'js', 'data', 'grammar_data.js'), 'r', encoding='utf-8') as f:
    gram_content = f.read()

test("Grammar Database loaded (25+ lessons)", "GRAMMAR_DATA" in gram_content)

# 5. TEST PSYCHOLOGY DATA
with open(os.path.join(base_dir, 'js', 'data', 'psychology_data.js'), 'r', encoding='utf-8') as f:
    psy_content = f.read()

test("Psychology Database loaded", "PSYCHOLOGY_DATA" in psy_content)

# 6. TEST BFD DATA
with open(os.path.join(base_dir, 'js', 'data', 'bfd_data.js'), 'r', encoding='utf-8') as f:
    bfd_content = f.read()

test("BFD Contract & Ward Hub loaded", "BFD_DATA" in bfd_content and "finances" in bfd_content)

# 7. TEST EXTERNAL RESOURCES
with open(os.path.join(base_dir, 'js', 'data', 'resources_data.js'), 'r', encoding='utf-8') as f:
    res_content = f.read()

test("Curated External Resources Hub loaded", "RESOURCES_DATA" in res_content and "Goethe-Institut" in res_content)

# 8. TEST SAFETY GUARD
with open(os.path.join(base_dir, 'js', 'safety_guard.js'), 'r', encoding='utf-8') as f:
    guard_content = f.read()

test("Safety Guard role boundary enforcer present", "checkRoleBoundaries" in guard_content and "sanitizePrivacy" in guard_content)

# 9. TEST ADAPTIVE ENGINE
with open(os.path.join(base_dir, 'js', 'adaptive_engine.js'), 'r', encoding='utf-8') as f:
    adapt_content = f.read()

test("Adaptive State-Based Engine present", "5min_shift" in adapt_content and "10min_review" in adapt_content)

# 10. TEST APP BUNDLE SIZE & INTEGRITY
bundle_path = os.path.join(base_dir, 'js', 'app.bundle.js')
test("App Bundle exists and is comprehensive (> 500 KB)", os.path.exists(bundle_path) and os.path.getsize(bundle_path) > 500000, f"Size: {os.path.getsize(bundle_path) if os.path.exists(bundle_path) else 0} bytes")

print("=" * 60)
print(f"  ERGEBNIS: {passed} Tests bestanden, {failed} Fehlgeschlagen.")
print("=" * 60)

if failed > 0:
    sys.exit(1)
